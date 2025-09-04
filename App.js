
function changeColor(newColor){
    const text = document.getElementById("para")
    text.style.color = newColor;
}

document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", (event) => {
        changeColor(event.target.textContent.toLowerCase())
    })
})

const log = document.querySelector("#log")

function random(number){
    return Math.floor(Math.random() * number)
}

function setBackgroundColor(id){
    log.textContent = "";

    try{
        const element = document.querySelector(`#${id}`);
        console.log(element, id)
        const randomColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    element.style.backgroundColor = randomColor;
    }
    catch (e) {
    log.textContent = e;
  }
}

document.querySelector("#no-escape").addEventListener("click", () => {
    setBackgroundColor("this?elem")
});
document.querySelector("#css-escape").addEventListener("click", () => {
     setBackgroundColor(CSS.escape("this?elem"));
})
document.querySelector("#manual-escape").addEventListener("click", () => {
      setBackgroundColor("this\\?elem")
})