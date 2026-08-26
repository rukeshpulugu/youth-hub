function openSection(section) {

    const pages = {
        tools: "/tools/tools.html",
        study: "/study/study.html",
        games: "/games/games.html",
        skills: "/skills/skills.html"
    };

    // Open the selected section
    if (pages[section]) {
        window.location.href = pages[section];
        return;
    }

    // Fallback message
    const message = document.getElementById("message");

    if (message) {
        const names = {
            tools: "🛠️ Tools Hub",
            study: "📚 Study Hub",
            games: "🎮 Game Hub",
            skills: "💻 Skills Hub"
        };

        message.innerHTML = `
            <h2>${names[section] || "Youth Hub"}</h2>
            <p>This section is coming soon 🚀</p>
        `;
    }
}