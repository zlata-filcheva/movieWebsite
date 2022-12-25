const image = document.querySelector("#image");

image.addEventListener("mouseover", () => {
    image.src = "../../images/Logo2.jpg";
});

image.addEventListener("mouseout", () => {
    image.src = "../../images/Logo.jpg";
});

