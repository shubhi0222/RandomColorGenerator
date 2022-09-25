const button = document.querySelector("button");
const h1 = document.querySelector("h1");
button.addEventListener("click", function() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const newColor = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
    if ((r < 50 && g < 50) || (g < 50 && b < 50) || (r < 50 && b < 50)) {
        h1.style.color = rgb(255, 255, 255);
    }
});