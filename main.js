let container = document.querySelector(".container");

for(let i = 1; i <= 256; i++){
let square = document.createElement("div");
square.classList.add("square");
container.appendChild(square);
square.addEventListener("mouseenter", ()=> {
    function red(){
        return Math.floor(Math.random() * 256);
    }
    function green(){
        return Math.floor(Math.random() * 256);
    }
    function blue(){
        return Math.floor(Math.random() * 256);
    }

square.style.backgroundColor = `rgb(${red()}, ${green()}, ${blue()})`;
});

}


let btn = document.querySelector(".button")
btn.addEventListener("click", () => {
    let num = prompt("type a number (max of 100)");
    
    if(num < 0 || num > 100){
        alert("type a number between 1-100");
    } else if(num > 0 || num < 100){
        container.innerHTML = "";
        for(let i = 1; i <= num**2; i++){
let userSquare = document.createElement("div");
let userSquareWidth = (1000/num - 2) + "px";
userSquare.style.width = userSquareWidth;
userSquare.style.height = userSquareWidth;
userSquare.classList.add("userSquare");
container.appendChild(userSquare);
userSquare.addEventListener("mouseenter", ()=> {
    function red(){
        return Math.floor(Math.random() * 256);
    }
    function green(){
        return Math.floor(Math.random() * 256);
    }
    function blue(){
        return Math.floor(Math.random() * 256);
    }

userSquare.style.backgroundColor = `rgb(${red()}, ${green()}, ${blue()})`;
});

}

    } else{
        alert("type a valid number betweeen 1-100");
    }
});

