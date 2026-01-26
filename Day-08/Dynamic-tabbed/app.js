tabHeaders = document.querySelector(".tab-headers");

tabHeaders.addEventListener("click", (event) => {
  if (!event.target.classList.contains("tab")) return;

  const tabId = event.target.dataset.tab;

  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.remove("active");
  });

  event.target.classList.add("active");

  document.querySelectorAll(".content").forEach((content) => {
    content.classList.remove("active");
  });

  const activeContent = document.querySelector(`.content[data-tab="${tabId}"]`);
  activeContent.classList.add("active");
});
