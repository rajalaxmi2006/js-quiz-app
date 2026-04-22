function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

function registerUser(user) {
  const users = getUsers();
  users.push(user);
  saveUsers(users);
}

function findUserByEmail(email) {
  return getUsers().find(user => user.email === email);
}

function loginUser(user) {
  localStorage.setItem("isLoggedIn", "true");
  localStorage.setItem("currentUser", JSON.stringify(user));
}

function logoutUser() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("currentUser");
  localStorage.removeItem("quizCurrentIndex");
  localStorage.removeItem("quizScore");
}

function isLoggedIn() {
  return localStorage.getItem("isLoggedIn") === "true";
}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem("currentUser"));
}

function protectPage() {
  if (!isLoggedIn()) {
    window.location.href = "index.html";
  }
}
