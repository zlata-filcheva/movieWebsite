'use strict';

const menuEl = document.getElementById("menu");
const expandMenuButton = document.getElementById("expandMenu");

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
            <div class='${index > 3 ? "hidden menu-el" : "menu-el"}'> 
                <a href=/main/Жанры/${link}>${text}</a>
            </div>
        `;
    })
    .join(``);

menuEl.innerHTML = generatedMenu;

expandMenuButton.addEventListener("click", () => {
    const menuElements = document.getElementsByClassName("menu-el");
    const menuElementsArray = [...menuElements];

    menuElementsArray.forEach(element => {
        if (element.className.includes("hidden")){
            element.classList.remove("hidden");
            element.classList.add("opened");

            return;
        }

        if (element.className.includes("opened")) {
            element.classList.remove("opened");
            element.classList.add("hidden");
        }
    });

});