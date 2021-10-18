
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons){
        button.addEventListener("click", function() {
            if(this.getAttribute('data-type')==="submit"){
                checkAnswer();
            }else{
                let gameType = this.getAttribute('data-type');
                runGame(gameType);
            }
        })
    }

    runGame("addition");
})

/**
 * The main game loop
 * 
 */

function runGame(gameType){
    let num1 = Math.floor(Math.random()*12) + 1;
    let num2 = Math.floor(Math.random()*12) + 1;

    switch (gameType) {
        case "addition":
            displayAdditionQuestion(num1, num2);
           break;
   
        case "subtract":
            if(num1 < num2){
                runGame("subtract");
                break;
            }else{
                displaySustractQuestion(num1, num2);
               break;
            }

        case "multiply":
            displayMultiplyQuestion(num1, num2);
           break;

        case "division":
            if(num1 < num2){
                runGame("division");
                break;
            }else{
                displayDivisionQuestion(num1, num2);
               break;
            }

        default:
            alert(`Unknown game type: ${gameType}`);
            throw `Unknown game type: ${gameType}. Aborting!`;
           break;
   }
}




function checkAnswer(){
    let myAnswer = parseInt(document.getElementById('answer-box').value);
    let correctAnswer = calculateCorrectAnswer()[0];

    if(myAnswer === correctAnswer){
        alert("Welldone!");
        incrementScore();
    }else{
        alert(`Oh Oh! The correct answer is ${correctAnswer}`);
        incrementWrongAnswers();
    }
    runGame(calculateCorrectAnswer()[1]);
}
function calculateCorrectAnswer() {
    
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById("operator").innerText;

   switch (operator) {
        case "+":
            return [operand1 + operand2, "addition"];
           break;
   
        case "-":
            return [operand1 - operand2, "subtract"];
           break;

        case "x":
            return [operand1 * operand2, "multiply"];
           break;

        case "/":
            return [operand1 / operand2, "division"];
            break;

        default:
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
           break;
   }
}
function incrementScore() {
    let actualScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerHTML = ++actualScore;
}
function incrementWrongAnswers() {
    let actualScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerHTML = ++actualScore;
}
function displayAdditionQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
    
}
function displaySustractQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "-";
    
    
}
function displayMultiplyQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";
    
    
}
function displayDivisionQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "/";
    
    
}