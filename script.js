document.addEventListener("DOMContentLoaded", () => {

    const containerOne = document.querySelector('#Container01');
    const containerTwo = document.querySelector('#Container02');
    

function generateDigit(max) {
    return Math.floor(Math.random() * (max + 1));
}

function generateTwoNumbers() {
    let valueOne = generateDigit(9);
    let valueTwo = generateDigit(9 - valueOne);
    return [valueOne, valueTwo];
}

const problemsToSolve = [];

function generateProblem() {
for (let i = 0; i < 25; i++) {
    let numbersToCalculate = generateTwoNumbers();
    problemsToSolve.push(numbersToCalculate);    
}
}

// j0 + j1 = resultado
// problems

function setupProblems(problems) {
    for (let i = 0; i < 25; i++) {
        containerOne.appendChild()
        (problemsToSolve[i][0] + '+' + problemsToSolve[i][1] + "=");
    }
}

console.log(problemsToSolve);

function generateProblem() {
    doisNumeros = generateTwoNumbers();
    problemsToSolve = doisNumeros.push(generateTwoNumbers());
}



})