const registerForm = document.getElementById("registerForm");
const loginForm = document.getElementById("loginForm");

if (registerForm) {
  registerForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("registerUsername").value.trim();
    const email = document.getElementById("registerEmail").value.trim().toLowerCase();
    const password = document.getElementById("registerPassword").value.trim();
    const message = document.getElementById("registerMessage");

    message.textContent = "";
    message.className = "message";

    if (!username || !email || !password) {
      message.textContent = "All fields are required.";
      message.classList.add("error");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      message.textContent = "Enter a valid email address.";
      message.classList.add("error");
      return;
    }

    if (password.length < 6) {
      message.textContent = "Password must be at least 6 characters.";
      message.classList.add("error");
      return;
    }

    const existingUser = findUserByEmail(email);
    if (existingUser) {
      message.textContent = "Email already registered.";
      message.classList.add("error");
      return;
    }

    registerUser({ username, email, password });

    message.textContent = "Registration successful. Redirecting to login...";
    message.classList.add("success");

    setTimeout(() => {
      window.location.href = "index.html";
    }, 1200);
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim().toLowerCase();
    const password = document.getElementById("loginPassword").value.trim();
    const message = document.getElementById("loginMessage");

    message.textContent = "";
    message.className = "message";

    if (!email || !password) {
      message.textContent = "Email and password are required.";
      message.classList.add("error");
      return;
    }

    const user = findUserByEmail(email);

    if (!user || user.password !== password) {
      message.textContent = "Invalid email or password.";
      message.classList.add("error");
      return;
    }

    loginUser(user);
    window.location.href = "dashboard.html";
  });
}
