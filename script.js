function openSection(section) {

    const pages = {
        study: "study.html",
        tools: "tools.html",
        games: "games.html",
        skills: "skills.html"
    };

    if (pages[section]) {
        window.location.href = pages[section];
        return;
    }

    const message = document.getElementById("message");

    if (message) {
        const names = {
            study: "📚 Study Hub",
            tools: "🛠️ Tools Hub",
            games: "🎮 Game Hub",
            skills: "💻 Skills Hub"
        };

        message.innerHTML = `
            <h2>${names[section] || "Youth Hub"}</h2>
            <p>This section is coming soon 🚀</p>
        `;
    }
}