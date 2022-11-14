const button = document.querySelector("button");
const h1 = document.querySelector("h1");
button.addEventListener("click", function() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const newColor = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = newColor;
    if (r < 90 && g < 90 && b < 90) {
        h1.style.color = "white";
    } else {
        h1.style.color = "black";
    }
    h1.innerText = newColor;
});