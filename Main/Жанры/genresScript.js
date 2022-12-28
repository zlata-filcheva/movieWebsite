const PAGES = [
    {
        name: "аниме",
        url: "../../images/1.jpg",
    },
    {
        name: "биографический",
        url: "../../images/2.jpg",
    },
    {
        name: "боевик",
        url: "../../images/3.jpg",
    },
    {
        name: "вестерн",
        url: "../../images/4.jpg",
    },
    {
        name: "военный",
        url: "../../images/5.jpg",
    },
    {
        name: "детектив",
        url: "../../images/6.jpg",
    },
    {
        name: "детский",
        url: "../../images/7.jpg",
    },
    {
        name: "документальный",
        url: "../../images/8.jpg",
    },
    {
        name: "драма",
        url: "../../images/9.jpg",
    },
    {
        name: "имторический",
        url: "../../images/10.jpg",
    },
    {
        name: "кинокомикс",
        url: "../../images/11.jpg",
    },
    {
        name: "комедия",
        url: "../../images/12.jpg",
    },
    {
        name: "концерт",
        url: "../../images/13.jpg",
    },
    {
        name: "короткометражный",
        url: "../../images/14.jpg",
    },
    {
        name: "криминал",
        url: "../../images/15.jpg",
    },
    {
        name: "мелодрама",
        url: "../../images/16.jpg",
    },
    {
        name: "мистика",
        url: "../../images/17.jpg",
    },
    {
        name: "музыка",
        url: "../../images/18.jpg",
    },
    {
        name: "мультфильм",
        url: "../../images/19.jpg",
    },
    {
        name: "мюзикл",
        url: "../../images/20.jpg",
    },
    {
        name: "научный",
        url: "../../images/21.jpg",
    },
    {
        name: "нуар",
        url: "../../images/22.jpg",
    },
    {
        name: "приключения",
        url: "../../images/23.jpg",
    },
    {
        name: "реалити-шоу",
        url: "../../images/24.jpg",
    },
    {
        name: "семейный",
        url: "../../images/25.jpg",
    },
    {
        name: "спорт",
        url: "../../images/26.jpg",
    },
    {
        name: "токшоу",
        url: "../../images/27.jpg",
    },
    {
        name: "триллер",
        url: "../../images/28.jpg",
    },
    {
        name: "ужасы",
        url: "../../images/29.jpg",
    },
    {
        name: "фантастика",
        url: "../../images/30.jpg",
    },
    {
        name: "фэнтези",
        url: "../../images/31.jpg",
    },
    {
        name: "эротика",
        url: "../../images/32.jpg",
    },
]

const pathname = window.location.pathname;

const currentPage = PAGES.find(({name, url}) => {
    const decodedString = decodeURI(window.location);

    if (decodedString.includes(name)) {
        return url;
    }
});

document
    .documentElement
    .style
    .setProperty("--background-image-url", `url(${currentPage.url})`);
