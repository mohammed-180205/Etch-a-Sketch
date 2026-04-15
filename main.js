let container = document.querySelector(".container");

for(let i = 1; i <= 256; i++){
let square = document.createElement("div");
square.classList.add("square");
container.appendChild(square);
square.addEventListener("mouseenter", ()=> {square.style.backgroundColor = "black"});

}



square.addEventListener("mouseenter", changeColor);

