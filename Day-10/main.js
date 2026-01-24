console.log("Country Details");

// DOM ELEMENTS
const errorElement = document.getElementById("error");
const loader = document.getElementById("loader");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const countryDetails = document.getElementById("countryDetails");
const observerTarget = document.getElementById("observerTarget");

let map;

// ---------------- DEBOUNCE ----------------
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// ---------------- DEDUPING CACHE ----------------
const countryCache = {};

// ---------------- FETCH COUNTRY ----------------
function fetchCountry(name) {
  if (!name) return;

  // deduping
  if (countryCache[name]) {
    console.log("Using cached / running request");
    return countryCache[name];
  }

  loader.classList.remove("hidden");
  errorElement.classList.add("hidden");

  const promise = fetch(
    `https://restcountries.com/v3.1/name/${name}?fullText=true`,
  )
    .then((res) => {
      if (!res.ok) throw new Error("Country not found");
      return res.json();
    })
    .then((data) => {
      renderCountry(data[0]);
      return data[0];
    })
    .catch((err) => {
      errorElement.classList.remove("hidden");
      errorElement.textContent = err.message;
    })
    .finally(() => {
      loader.classList.add("hidden");
      delete countryCache[name]; //  cleanup
    });

  countryCache[name] = promise;
  return promise;
}

// ---------------- RENDER UI ----------------
function renderCountry(country) {
  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "N/A";

  countryDetails.innerHTML = `
    <div class="p-4 border rounded bg-slate-800">
      <img
        src="${country.flags.svg}"
        class="w-24 h-16 object-contain mb-2"
      />
      <h2 class="text-xl font-bold">${country.name.common}</h2>
      <p><strong>Capital:</strong> ${country.capital?.[0]}</p>
      <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
      <p><strong>Languages:</strong> ${languages}</p>
    </div>
  `;

  drawMap(country.latlng, country.name.common);
}

// ---------------- MAP ----------------
function drawMap(latlng, name) {
  const [lat, lng] = latlng;

  if (!map) {
    map = L.map("map").setView([lat, lng], 5);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      map,
    );
  } else {
    map.setView([lat, lng], 5);
  }

  L.marker([lat, lng]).addTo(map).bindPopup(name).openPopup();
}

// ---------------- EVENTS ----------------
const debouncedFetch = debounce((value) => {
  fetchCountry(value);
}, 600);

searchInput.addEventListener("input", () => {
  const value = searchInput.value.trim().toLowerCase();
  if (value) debouncedFetch(value);
});

searchBtn.addEventListener("click", () => {
  const value = searchInput.value.trim().toLowerCase();
  fetchCountry(value);
});

// ---------------- INTERSECTION OBSERVER ----------------
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("Country section visible on screen");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 },
);

observer.observe(observerTarget);
