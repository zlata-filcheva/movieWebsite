'use strict';

const expandMenuButton = document.getElementById("expandMenu");

(async () => {
    const menuEl = document.getElementById("menu");
    const {menu} = await import("./constants/menu.js");

    menuEl.innerHTML = menu
        .map(({link, name}, index) => {
            return `
            <div class='${index > 3 ? "hidden siteMenu-el" : "siteMenu-el"}'> 
                <a href="/movieWebsite/main/Жанры/${link}">${name}</a>
            </div>
        `;
        })
        .join(``);
})();

expandMenuButton.addEventListener("click", () => {
    const menuElements = document.getElementsByClassName("siteMenu-el");
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
