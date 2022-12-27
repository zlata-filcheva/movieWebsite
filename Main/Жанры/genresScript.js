const PAGES = [
    {
        name: "боевик",
        url: "../../images/3.jpg",
    },
    {
        name: "аниме",
        url: "../../images/1.jpg",
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
