const slider = document.getElementById("color");
const body = document.getElementById("body");
const valueTag = document.getElementById("value");

slider.addEventListener("input", (event) => {
    body.style.setProperty("--hue-primary", parseInt(event.target.value));
    valueTag.textContent = parseInt(event.target.value);
});