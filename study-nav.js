function createStudyNavigation() {

    const nav = document.createElement("nav");

    nav.className = "study-nav";

    nav.innerHTML = `

        <a href="study.html">
            🎓 Study
        </a>

        <a href="subjects.html">
            📚 Subjects
        </a>

        <a href="notes.html">
            📝 Notes
        </a>

        <a href="quiz.html">
            ❓ Quiz
        </a>

        <a href="flashcards.html">
            🧠 Flashcards
        </a>

        <a href="pomodoro.html">
            ⏱️ Pomodoro
        </a>

        <a href="planner.html">
            📅 Planner
        </a>

        <a href="todo.html">
            ✅ To-Do
        </a>

        <a href="progress.html">
            📊 Progress
        </a>

        <button
            onclick="toggleDarkMode()"
            class="dark-btn">

            🌙 Dark

        </button>

    `;

    document.body.prepend(nav);

    applyDarkMode();

    updateDarkButton();

}


function toggleDarkMode() {

    document.body.classList.toggle("dark");

    const enabled =
        document.body.classList.contains("dark");

    localStorage.setItem(
        "youthHubDarkMode",
        enabled
    );

    updateDarkButton();

}


function applyDarkMode() {

    const enabled =
        localStorage.getItem(
            "youthHubDarkMode"
        ) === "true";

    if (enabled) {

        document.body.classList.add("dark");

    }

}


function updateDarkButton() {

    const button =
        document.querySelector(".dark-btn");

    if (!button) return;

    if (
        document.body.classList.contains("dark")
    ) {

        button.innerText = "☀️ Light";

    } else {

        button.innerText = "🌙 Dark";

    }

}