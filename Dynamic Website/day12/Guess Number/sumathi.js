// let guessNumber = Math.ceil(Math.random()*100);
// console.log(guessNumber);
function checkGuess() {
    let gameResult = document.getElementById("gameResult");
    let userInput = document.getElementById("userInput").value;
    let userValue = parseInt(userInput);
    let guessNumber = Math.ceil(Math.random()*100);
    // console.log(guessNumber);
    // let guessNumber = 10;
    // console.log(typeof(userInput));
    if(guessNumber === userValue){
        gameResult.textContent = "Congrats";
        gameResult.style.color = "green";
    }
    else if(guessNumber > userValue){
        gameResult.textContent = "you have entered less value";
        gameResult.style.color = "red";
        gameResult.style.backgroundColor = "#1e217c";
    }
    else if(guessNumber < userValue){
        gameResult.textContent = "you have entered greater value";
        gameResult.style.color = "red";
        gameResult.style.backgroundColor = "#1e217c";
    }
    else{
        gameResult.textContent = "Please provide a valid input";
        gameResult.style.backgroundColor = "#1e217c";
    }
}