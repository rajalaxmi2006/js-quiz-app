protectPage();

const totalQuestions = document.getElementById("totalQuestions");
const correctAnswers = document.getElementById("correctAnswers");
const scoreText = document.getElementById("scoreText");
const restartBtn = document.getElementById("restartBtn");
const logoutBtn = document.getElementById("logoutBtn");

const total = Number(localStorage.getItem("totalQuestions")) || 0;
const score = Number(localStorage.getItem("finalScore")) || 0;
const percentage = total ? Math.round((score / total) * 100) : 0;

totalQuestions.textContent = total;
correctAnswers.textContent = score;
scoreText.textContent = `${percentage}%`;

restartBtn.addEventListener("click", () => {
  localStorage.removeItem("finalScore");
  localStorage.removeItem("totalQuestions");
  localStorage.setItem("quizCurrentIndex", 0);
  localStorage.setItem("quizScore", 0);
  window.location.href = "quiz.html";
});

logoutBtn.addEventListener("click", () => {
  logoutUser();
  window.location.href = "index.html";
});
