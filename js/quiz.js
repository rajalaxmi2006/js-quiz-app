protectPage();

const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const nextBtn = document.getElementById("nextBtn");
const quizMessage = document.getElementById("quizMessage");
const logoutBtn = document.getElementById("logoutBtn");

let currentIndex = Number(localStorage.getItem("quizCurrentIndex")) || 0;
let score = Number(localStorage.getItem("quizScore")) || 0;
let selectedOption = null;

function loadQuestion() {
  const currentQuestion = quizData[currentIndex];
  selectedOption = null;
  quizMessage.textContent = "";
  quizMessage.className = "message";

  progressText.textContent = `Question ${currentIndex + 1} of ${quizData.length}`;
  progressBar.style.width = `${((currentIndex + 1) / quizData.length) * 100}%`;
  questionText.textContent = currentQuestion.question;
  optionsContainer.innerHTML = "";

  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.classList.add("option-btn");
    button.textContent = option;

    button.addEventListener("click", () => {
      document.querySelectorAll(".option-btn").forEach(btn => {
        btn.classList.remove("selected");
      });

      button.classList.add("selected");
      selectedOption = option;
    });

    optionsContainer.appendChild(button);
  });

  nextBtn.textContent = currentIndex === quizData.length - 1 ? "Finish Quiz" : "Next";
}

nextBtn.addEventListener("click", () => {
  if (!selectedOption) {
    quizMessage.textContent = "Please select an answer before continuing.";
    quizMessage.classList.add("error");
    return;
  }

  if (selectedOption === quizData[currentIndex].correct) {
    score++;
  }

  localStorage.setItem("quizScore", score);

  currentIndex++;
  localStorage.setItem("quizCurrentIndex", currentIndex);

  if (currentIndex < quizData.length) {
    loadQuestion();
  } else {
    localStorage.setItem("finalScore", score);
    localStorage.setItem("totalQuestions", quizData.length);
    localStorage.removeItem("quizCurrentIndex");
    localStorage.removeItem("quizScore");
    window.location.href = "result.html";
  }
});

logoutBtn.addEventListener("click", () => {
  logoutUser();
  window.location.href = "index.html";
});

loadQuestion();
