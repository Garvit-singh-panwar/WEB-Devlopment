let btn = document.querySelector("button");
let bgchange = document.querySelector('div');
btn.addEventListener("click", () =>{
    let h3 = document.querySelector('h3');
    let RandomColor = getRandomColor();
    h3.innerText = RandomColor;
    bgchange.style.backgroundColor = RandomColor;
}
)

function getRandomColor() {
    let red = Math.floor(Math.random() *255);
    let green = Math.floor(Math.random() *255);
    let blue = Math.floor(Math.random() *255);
    let color = `rgb(${red} , ${green} , ${blue})`;
    return color;
}