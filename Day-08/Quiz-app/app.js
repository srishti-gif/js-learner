const quizData = [
  {
    question: "what does DOM stand for?",
    options: [
      "Document Object Memorary",
      "Document Oriented Model",
      "Document Object Model",
      "Documentary Oritented Model",
    ],
    correct: 2,
  },

  {
    question: "Which method selects by ID?",
    options: [
      "getElementById()",
      "querySelectorAll()",
      "getElement()",
      "getElementByClassName()",
    ],
    correct: 0,
  },

  {
    question: "Which event fires on input change?",
    options: ["click", "submit", "change", "keydown"],
    correct: 2,
  },
];

let questions = [...quizData].sort(() => Math.random() - 0.5);
let currentQuestion = 0;
let score = 0;
let timer;

let timLeft;

const questionEle = document.getElementById("questions");
const optionEle = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const timerEle = document.getElementById("timer");
const resultEle = document.getElementById("result");

function loadQuestion() {
  clearInterval(timer);
  timeleft = 15;
  updateTimer();
  timer = setInterval(countdown, 1000);

  const q = questions[currentQuestion];
  console.log(q);
  questionEle.textContent = `Q${currentQuestion + 1}.${q.question}`;
  optionEle.innerHTML = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.classList.add("option-btn");
    btn.textContent = option;
    btn.addEventListener("click", () => selectAnswer(index, true));
    optionEle.appendChild(btn);
  });

  nextBtn.style.display = "none";
}

function countdown() {
  timeleft--;
  updateTimer();
  if (timeleft === 0) {
    clearInterval(timer);
    selectAnswer(questions[currentQuestion]?.correct, false);
  }
}

function updateTimer() {
  timerEle.textContent = `Time Left: ${timeleft}`;
}

function selectAnswer(index, shouldScore) {
  clearInterval(timer);
  const q = questions[currentQuestion];

  const buttons = document.querySelectorAll(".option-btn");

  buttons.forEach((btn) => (btn.disabled = true));

  if (index === q.correct) {
    buttons[index].classList.add("correct");
    if (shouldScore) score++;
  } else {
    buttons[index].classList.add("wrong");
    buttons[q.correct].classList.add("correct");
  }

  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  nextBtn.style.display = "one";
  const highScore = localStorage.getItem("quizHighScore") || 0;

  const isNew = score > highScore;

  if (isNew) {
    localStorage.setItem("quizHighScore", score);
  }

  resultEle.innerHTML = `
  <h2>Hurray!!! Quiz Completed </h2>
  <p> You have Scored ${score} out of ${questions.length} questions<p>
  <p> Highest Score ${Math.max(score, highScore)}</p>
    ${isNew ? "<p>Hey! New HighScore</p>" : ""}
    <button onclick = "resetQuiz()">Restart Quiz</button>
  `;
}

function resetQuiz() {
  currentQuestion = 0;
  score = 0;
  questions = [...quizData].sort(() => Math.random() - 0.5);

  resultEle.innerHTML = "";
  nextBtn.style.display = "none";
  loadQuestion();
}

loadQuestion();
