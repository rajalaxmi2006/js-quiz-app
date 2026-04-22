
# 🧠 Quiz Application (Frontend Only)

A responsive quiz web application built using **HTML, CSS, and JavaScript**, following a structured Product Requirements Document (PRD).  
This project demonstrates authentication, state management, and interactive UI using only browser-based storage.

---

## 🚀 Features

### 🔐 Authentication System
- User Registration (Username, Email, Password)
- Login with validation
- Prevent duplicate users
- Session handling using `localStorage`
- Protected routes (dashboard & quiz access)

### 📊 Dashboard
- Personalized welcome message
- Start Quiz button
- Logout functionality

### ❓ Quiz System
- One question at a time
- Multiple choice questions (MCQ)
- Answer selection validation
- Next navigation
- Progress indicator (question count + progress bar)

### 📈 Result Screen
- Total questions
- Correct answers
- Score percentage
- Restart quiz option

### 📱 Responsive Design
- Mobile-first layout
- Clean and modern UI

---

## 🛠️ Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla JS)**
- **LocalStorage API**

---

## 📂 Project Structure
```
quiz-app/
│
├── index.html # Login page
├── register.html # Register page
├── dashboard.html # Dashboard page
├── quiz.html # Quiz page
├── result.html # Result page
│
├── css/
│ ├── style.css # Global styles
│ ├── auth.css # Auth pages styling
│ └── quiz.css # Quiz & result styling
│
├── js/
│ ├── auth.js # Login & register logic
│ ├── quiz.js # Quiz flow logic
│ ├── result.js # Result handling
│ ├── storage.js # LocalStorage utilities
│ └── data.js # Quiz questions data
│
└── README.md
```
## ⚙️ Default Behavior

- Application runs fully on the browser (no backend required)
- User data is stored in `localStorage`
- Session is maintained using:
  - `isLoggedIn`
  - `currentUser`
- Users must log in to access dashboard and quiz
- Quiz state (current question & score) is temporarily stored
- Data is cleared on logout

## 📌 Validation Rules

- All input fields are required
- Email must follow valid format (e.g. biswalrajalaxmi901@gmail.com)
- Email must be unique (no duplicate registration)
- Password must be at least 6 characters long
- Prevent empty form submission
- Show user-friendly error messages

## 🔮 Future Enhancements

- Backend integration (Node.js + Express)
- Database (MongoDB / MySQL)
- JWT-based authentication
- Leaderboard system
- Category-based quizzes
- Timer for each question
- API-based dynamic questions (Open Trivia API)
- User performance analytics

## ✅ Success Criteria

- Users can successfully register and log in
- Only authenticated users can access quiz pages
- Quiz flow works without errors
- Score calculation is accurate
- UI is responsive across devices
- Smooth navigation between pages

## 🙏 Acknowledgements

- Inspired by real-world frontend interview projects
- Built following structured Product Requirements Document (PRD)
- Thanks to open web standards (HTML, CSS, JavaScript)

## ⭐ Support

If you find this project helpful:

- ⭐ Star the repository
- 🍴 Fork and improve it
- 🐛 Report bugs
- 💡 Suggest new features
## 📞 Contact

**Raj (Developer)**

- GitHub: https://github.com/rajalaxmi2006/
- Email: biswalrajalaxmi901@gmail.com

Feel free to reach out for collaboration or feedback.

## 💬 Quote

"Code is not just about solving problems, it's about building experiences."



