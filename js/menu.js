'use strict';

const menuEl = document.getElementById("menu");

const menu = [
    {
        link: "аниме.html",
        text: "Aниме",
    },
    {
        link: "биографический.html",
        text: "Биографический",
    },
    {
        link: "боевик.html",
        text: "Боевик",
    },
    {
        link: "вестерн.html",
        text: "Вестерн",
    },
    {
        link: "военный.html",
        text: "Военный",
    },
    {
        link: "детектив.html",
        text: "Детектив",
    },
    {
        link: "детский.html",
        text: "Детский",
    },
    {
        link: "документальный.html",
        text: "Документальный",
    },
];

const generatedMenu = menu
    .map(({link, text}, index) => {
        return `
            <div class=${index > 3 ? "hidden" : ""}> 
                <a href=/main/Жанры/${link}>${text}</a>
            </div>
        `;
    })
    .join(``);

menuEl.innerHTML = generatedMenu;

