// console.log("Wow, I can write JS code without much help! Yayyy");
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#new");
let msg = document.querySelector("#msg");
let msgcontainer = document.querySelector(".msg-container");

let turnO = true    //making player O first
const winArr = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
    
});

const enableBoxes= ()=>{
    for(let box of boxes){
        box.innerText = "";
        box.disabled = false;
    }
    
}

const resetGame = ()=>{
    msgcontainer.classList.add("hide");
    turnO = true;
    enableBoxes();
}

const disableBoxes = ()=>{
    for(let box of boxes){
    box.disabled = true;
}
}


const showwinner = (winner)=>{
    msg.innerText = `Congratulations, Winner ${winner}!!!`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

// displaying winner
const checkWinner = ()=>{
    for(let arr of winArr){
        let box1 = boxes[arr[0]].innerText;
        let box2 = boxes[arr[1]].innerText;
        let box3 = boxes[arr[2]].innerText;

        if(box1 != "" && box2 != "" && box3 != ""){
            if(box1 === box2 && box2 === box3){
                showwinner(box1);
            }
        }
    }

}

// implementing reset and new game
reset.addEventListener("click",resetGame);
newGame.addEventListener("click",resetGame);


