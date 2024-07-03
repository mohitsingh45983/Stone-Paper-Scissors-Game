let yourScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let newBtn = document.querySelector(".newBtn")


choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);

    });
});

const newGame =() =>{
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#081b31";
    yourScore = 0;
    document.querySelector("#User-Score").innerText = yourScore;
    
    compScore = 0;
    document.querySelector("#computer-score").innerText = compScore;

};

const Draw = () =>{
    console.log("It was a draw");
    msg.innerText = "Game was Draw.Play again!"
    msg.style.backgroundColor = "#081b31";
}

const compChoice = () =>{
    const options = ["paper","rock","scissors"];
    let values =  Math.floor(Math.random()*3);
    return options[values];

};

const whoWin = (userWin,userChoice,computerChoice) =>{
    if(userWin)
    {
        console.log("User has won");
        msg.innerText = `You won!.Your ${userChoice} beats ${computerChoice}`;
        yourScore++;
        document.querySelector("#User-Score").innerText = yourScore;
        msg.style.backgroundColor = "green";
    }
    else
    {
        console.log("Computer has won");
        msg.innerText = `You lost!${computerChoice} beats your ${userChoice}`;
        compScore++;
        document.querySelector("#computer-score").innerText = compScore;
        msg.style.backgroundColor = "red";
    }

};

const playGame = (userChoice) =>{
    console.log("userChoice =" ,userChoice );
    let computerChoice = compChoice();
    console.log("CompChoice =",computerChoice);

    let userWin = true;
    if(userChoice === computerChoice)
    {
        // condition of draw 
        Draw();
    }
    else
    {
        if(userChoice === "rock")
        {
            // compChoice = paper or scissor 
            userWin = computerChoice === "paper" ? false:true;
            whoWin(userWin,userChoice,computerChoice);
        }
        else if(userChoice === "paper")
        {
            // compChoice = rock or scissor 
            userWin = computerChoice ==="scissors"?false:true;
            whoWin(userWin,userChoice,computerChoice);

        }
        else{
            userWin= computerChoice === "rock"?false:true;
            whoWin(userWin,userChoice,computerChoice);
        }
    }


};

newBtn.addEventListener("click",newGame);
