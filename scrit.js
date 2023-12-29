let userScore =0;
let compScore =0;

let choices = document.querySelectorAll(".choice");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector(".msg");
let userScores = document.querySelector("#userScore");
let compScores = document.querySelector("#compScore");

let ruleButton= document.querySelector(".rules");
let ul = document.querySelector(".hide");
let exitButton= document.querySelector(".exit");
let uldiv= document.querySelector(".uldiv");
let newGameButton= document.querySelector(".newgame")



const genCompChoice =()=>{
     let options =["rock","paper","scissor"];
     const randomSelection=Math.floor(Math.random() *3);
     return options[randomSelection];
}


const drawGame =()=>{
    console.log("game was draw");
    msg.innerText= "Game was draw. Play Again!"
    msg.style.backgroundColor = "#081b31"
    msg.style.color= "white"
}
const playGame =(userChoice)=>{
    const compChoice = genCompChoice();
    if(userChoice===compChoice){
        drawGame();

    }else {
        let userWin= true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"? false:true;
        }else if(userChoice==='paper'){
            userWin= compChoice==="scissor"?false : true;
        }else if (userChoice==="scissor"){
            userWin = compChoice==="rock"? false : true;

        }
        showWinner(userWin,compChoice,userChoice);
    }


}
choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        console.log("chocie was clicked", userChoice);
        playGame(userChoice);

    })
})

const showWinner = (userWin,compChoice,userChoice)=>{
    if(userWin){
    userScore++;
    userScores.innerText= userScore;
    msg.innerText= `Congrats you Win, ${userChoice} beats ${compChoice}`
       msg.style.backgroundColor="green"

    }else{
        compScore++;
        compScores.innerText=compScore;
        msg.innerText=`You lose ${compChoice} beats ${userChoice} !`
        msg.style.backgroundColor="red"
    }

}

ruleButton.addEventListener("click",()=>{
    ul.classList.remove("hide");
    uldiv.style.visibility="visible";
    


})

exitButton.addEventListener("click",()=>{
    ul.classList.add("hide");
    uldiv.style.visibility="hidden";
})


const newGame =()=>{
    userScore=0;
    compScore=0;
    userScores.innerText=userScore;
    compScores.innerText=compScore;
    msg.innerText="Select your Move!";
    msg.style.backgroundColor="rgb(250, 232, 232)";
    msg.style.color="black";

}
newGameButton.addEventListener("click",newGame);
