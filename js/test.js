const getArray = (inputString) => {
    return inputString.split("\n");
};

const movieArray = getArray("аниме\n" +
    "биографический\n" +
    "боевик\n" +
    "вестерн\n" +
    "военный\n" +
    "детектив\n" +
    "детский\n" +
    "документальный\n" +
    "драма\n" +
    "исторический\n" +
    "кинокомикс \n" +
    "комедия\n" +
    "концерт\n" +
    "короткометражный\n" +
    "криминал\n" +
    "мелодрама\n" +
    "мистика\n" +
    "музыка\n" +
    "мультфильм\n" +
    "мюзикл\n" +
    "научный\n" +
    "нуар\n" +
    "приключения\n" +
    "реалити-шоу\n" +
    "семейный\n" +
    "спорт\n" +
    "ток-шоу\n" +
    "триллер\n" +
    "ужасы\n" +
    "фантастика\n" +
    "фэнтези\n" +
    "эротика");

const getMenuObj = (array) => {
    return array.map(value => ({
        link: `${value}.html`,
        name: value
    }));
};

const object = getMenuObj(movieArray);

console.log(object);