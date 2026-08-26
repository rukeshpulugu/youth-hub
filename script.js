function openSection(section) {

    if (section === "tools") {

        window.location.href =
            "tools/tools.html";

        return;

    }


    if (section === "study") {

        window.location.href =
            "study/study.html";

        return;

    }
    if (section === "games") {

        window.location.href =
            "games/games.html";

    return;

    }
    if (section === "skills") {

    window.location.href =
        "skills/skills.html";

    return;

    }


    const message =
        document.getElementById("message");


    const names = {

        

        

        

        games: "🎮 Game Hub",

        skills: "💻 Skills Hub",

        

    };


    message.innerHTML = `

        <h2>

            ${names[section]}

        </h2>

        <p>

            This section is coming soon 🚀

        </p>

    `;

}