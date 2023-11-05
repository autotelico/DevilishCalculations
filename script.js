document.addEventListener("DOMContentLoaded", () => {

    const containerOne = document.querySelector('#Container01');
    const containerTwo = document.querySelector('#Container02');

    let TopScroll = 4000;

    const scrollBox = document.querySelector('#Top');
    const scrollBox2 = document.querySelector('#Bottom');

    const currentVerticalScroll = scrollBox.scrollTop;
    
    const numbersForProblems = [];

    generateProblem();
    console.log(numbersForProblems);
    setupProblems();


    scrollBox.scrollTop = TopScroll;
    scrollBox2.scrollTop = TopScroll;

    function generateDigit(max) {
        return Math.floor(Math.random() * (max + 1));
    }

    function generateTwoNumbers() {
        let valueOne = generateDigit(9);
        let valueTwo = generateDigit(9 - valueOne);
        return [valueOne, valueTwo];
    }


    function generateProblem() {
        for (let i = 0; i < 25; i++) {
            let numbersToCalculate = generateTwoNumbers();
            numbersForProblems.push(numbersToCalculate);
        }
    }

    

    function setupProblems() {
        let calculationDiv = document.createElement('div'); // Make containerTwo look empty when the game starts
            calculationDiv.classList.add('Calculation');
            calculationDiv.innerHTML = `&nbsp`;
        containerOne.appendChild(calculationDiv);

        for (let i = 0; i < 25; i++) {
            calculationDiv = document.createElement('div');
            calculationDiv.classList.add('Calculation');
            calculationDiv.textContent = `${numbersForProblems[i][0]} + ${numbersForProblems[i][1]} = ?`; // cabe função de guardar resultado aqui

            containerOne.appendChild(calculationDiv);
        }

        for (let i = 0; i < 25; i++) {
            calculationDiv = document.createElement('div');
            calculationDiv.classList.add('Calculation');
            calculationDiv.textContent = `${numbersForProblems[i][0]} + ${numbersForProblems[i][1]} = ?`; // cabe função de guardar resultado aqui

            containerTwo.appendChild(calculationDiv);
        }
            calculationDiv = document.createElement('div'); // Make containerTwo look empty when the game starts
            calculationDiv.classList.add('Calculation');
            calculationDiv.innerHTML = `&nbsp;`;
        containerTwo.appendChild(calculationDiv);
    }

    function storeResult(result) { // esquecido

    }

    function GoToNext() {
        TopScroll -= 160;
        $('#Top').animate({
            scrollTop: TopScroll  // the position you want to scroll to
        }, 1000);
        $('#Bottom').animate({
            scrollTop: TopScroll  // the position you want to scroll to
        }, 1000);
    }

    function validateAnswer(guess) {

        GoToNext();
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === '0' || event.key === 'Numpad0')
            validateAnswer(0);
        if (event.key === '1' || event.key === 'Numpad1')
            validateAnswer(1);
        if (event.key === '2' || event.key === 'Numpad2')
            validateAnswer(2);
        if (event.key === '3' || event.key === 'Numpad3')
            validateAnswer(3);
        if (event.key === '4' || event.key === 'Numpad4')
            validateAnswer(4);
        if (event.key === '5' || event.key === 'Numpad5')
            validateAnswer(5);
        if (event.key === '6' || event.key === 'Numpad6')
            validateAnswer(6);
        if (event.key === '7' || event.key === 'Numpad7')
            validateAnswer(7);
        if (event.key === '8' || event.key === 'Numpad8')
            validateAnswer(8);
        if (event.key === '9' || event.key === 'Numpad9')
            validateAnswer(9);

    });



    function startTimer(durationInSeconds) {
        let remainingTime = durationInSeconds;

        const interval = setInterval(function () {
            const timer = document.getElementById('Timer');
            timer.innerHTML = remainingTime;
            remainingTime--;

            if (remainingTime < 0) {
                clearInterval(interval);
                console.log("Timer finished!");
            }
        }, 1000);
    }

    startTimer(200);

})