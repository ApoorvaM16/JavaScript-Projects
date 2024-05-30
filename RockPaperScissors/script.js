let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const yScore = document.querySelector("#your-score");
const cScore = document.querySelector("#comp-score");

function getCompChoice(){
    options = ['rock', 'paper', 'scissors'];
    idx = Math.floor(Math.random() *3);
    return options[idx];
}

function draw(){
    console.log("Game Draw");
    msg.innerText = "Game was a Draw!! Play again."
    msg.style.backgroundColor = "#404E5C";
}
function playGame(userChoice){
    let compChoice = getCompChoice();
    console.log("Computer Selected "+ compChoice);
    if(compChoice === userChoice){
        return draw();
    }
    let userWon = true;
    if(userChoice === "rock"){
        userWon = compChoice === "paper"? false: true;
    }else if(userChoice === "paper"){
        userWon = compChoice === "scissors"? false: true;
    }else{
        userWon = compChoice === "rock"? false: true;
    }
    if(userWon){
        console.log("You Won!!");
        userScore +=1
        yScore.innerText = userScore;
        msg.innerText = `You Won!! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        console.log("You Lose :(");
        compScore +=1;
        cScore.innerText = compScore;
        msg.innerText = `You Lost :( ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor ="red";

    }

}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice = choice.getAttribute("id");
        console.log("User Selected "+ userChoice);
        playGame(userChoice);
    })
})