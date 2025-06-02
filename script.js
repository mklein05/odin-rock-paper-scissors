let computerScore = 0;
let humanScore = 0;

function getComputerChoice(){
    num = Math.floor(Math.random() * 3);
    switch (num){
        case 0:
            return "rock";
        case 1:
            return "scissors";
        case 2:
            return "paper";
    }
}

function getHumanChoice(){
    choice = prompt("Choose rock, paper, or scissors: ");
    return choice.toLowerCase();
}


function playRound(humanChoice, computerChoice){

    if(humanChoice == computerChoice){
        console.log("Draw! You both picked " + humanChoice); 
    }

    else if(humanChoice == "rock"){
        if(computerChoice == "scissors"){
            printWin(humanChoice, computerChoice);
        }
        else if(computerChoice == "paper"){
            printLoss(humanChoice, computerChoice);
        }
    }

    else if(humanChoice == "paper"){
        if(computerChoice == "scissors"){
            printLoss(humanChoice, computerChoice);
        }
        else if(computerChoice == "rock"){
            printWin(humanChoice, computerChoice);
        }
    }

    else if(humanChoice == "scissors"){
        if(computerChoice == "rock"){
            printLoss(humanChoice, computerChoice);
        }
        else if(computerChoice == paper){
            printWin(humanChoice, computerChoice);
        }
    }
    printScore();
}

function printWin(humanChoice, computerChoice){
    console.log("You win! " + humanChoice + " beats " + computerChoice + "!");
    humanScore ++;
}

function printLoss(humanChoice, computerChoice){
    console.log("You lose! " + computerChoice + " beats " + humanChoice + "!");
    computerScore ++;
}

function printScore(){
    console.log("The score is: ")
    console.log("Human: " + humanScore);
    console.log("Computer: " + computerScore);
}

function playGame(rounds){
    computerScore = 0;
    humanScore = 0;
    for(let i = 0; i < rounds; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
}

playGame(5);
