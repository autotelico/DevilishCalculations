document.addEventListener("DOMContentLoaded", () => {

    const containerOne = document.querySelector('#Container01');
    const containerTwo = document.querySelector('#Container02');

    let GameLevel = prompt('Select level: ', 1);
    let TopScroll = 3840 + GameLevel * 160;

    const scrollBox = document.querySelector('#Top');
    const scrollBox2 = document.querySelector('#Bottom');

    const currentVerticalScroll = scrollBox.scrollTop;

    const bgMusic = document.querySelector('#bg-music');
    let songIsPlaying = false;
    const correctSound = document.querySelector('#correct-sound');
    const wrongSound = document.querySelector('#wrong-sound');

    let currentProblemID = -GameLevel;

    let correctGuesses = 0; 
    let wrongGuesses = 0; 

    const numbersForProblems = [];

    if (GameLevel <= 0) {
        levelCorrector();
    }

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

        for(let i = 0; i < GameLevel; i++)
        {
            let calculationDiv = document.createElement('div'); // Make containerTwo look empty when the game starts
            calculationDiv.classList.add('Calculation');
            calculationDiv.innerHTML = `&nbsp`;
            containerOne.appendChild(calculationDiv);
        }

        for (let i = 24; i >= 0; i--) {
            calculationDiv = document.createElement('div');
            calculationDiv.classList.add('Calculation');
            calculationDiv.textContent = `${numbersForProblems[i][0]} + ${numbersForProblems[i][1]} = ?`; // cabe função de guardar resultado aqui

            containerOne.appendChild(calculationDiv);
        }

        for (let i = 24; i >= 0; i--) {
            calculationDiv = document.createElement('div');
            calculationDiv.classList.add('Calculation');
            calculationDiv.id = "problem"+i;
            //calculationDiv.textContent = `${numbersForProblems[i][0]} + ${numbersForProblems[i][1]} = ?`; // cabe função de guardar resultado aqui
            calculationDiv.textContent = '? + ? = ?';
            containerTwo.appendChild(calculationDiv);
        }
        for(let i = 0; i < GameLevel; i++)
        {
            calculationDiv = document.createElement('div'); // Make containerTwo look empty when the game starts
            calculationDiv.classList.add('Calculation');
            calculationDiv.innerHTML = `&nbsp`;
            containerTwo.appendChild(calculationDiv);
        }
    }


    function levelCorrector() {
        do {
            GameLevel = prompt('Select level: ', 1);
        } while (GameLevel <= 0)
    }

    function GoToNext() {
        if(TopScroll == 0)
        {
            $('.modal').css("display", "block");
            const correctGuessesDiv = document.querySelector('#CorrectGuesses');
            const wrongGuessesDiv = document.querySelector('#WrongGuesses');
            correctGuessesDiv.innerHTML = correctGuesses;
            wrongGuessesDiv.innerHTML = wrongGuesses;
        }
        else
        {
            TopScroll -= 160;
            $('#Top').animate({
                scrollTop: TopScroll  // the position you want to scroll to
            }, 1000);
            $('#Bottom').animate({
                scrollTop: TopScroll  // the position you want to scroll to
            }, 1000);
        }
    }

    function validateAnswer(guess) {
        if (currentProblemID >= 0) {
            
            const currentProblemDiv = document.querySelector("#problem"+currentProblemID);

            currentProblemDiv.innerHTML = `${numbersForProblems[currentProblemID][0]} + ${numbersForProblems[currentProblemID][1]} =<span id="answer${currentProblemID}"> ${guess} </span>`; 

            if (numbersForProblems[currentProblemID][0] + numbersForProblems[currentProblemID][1] === guess) {
                console.log('Acertou');
                $('#answer'+currentProblemID).css("color", "green");
                playCorrectSound();
                correctGuesses++;
            } else {
                console.log('Errou');
                $('#answer'+currentProblemID).css("color", "red");
                playWrongSound();
                wrongGuesses++;
            }
        }
        currentProblemID++;
        GoToNext();
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === '0' || event.key === 'Numpad0')
            validateAnswer(0);
            songIsPlaying = true;
        if (event.key === '1' || event.key === 'Numpad1')
            validateAnswer(1);
            songIsPlaying = true;
        if (event.key === '2' || event.key === 'Numpad2')
            validateAnswer(2);
            songIsPlaying = true;
        if (event.key === '3' || event.key === 'Numpad3')
            validateAnswer(3);
            songIsPlaying = true;
        if (event.key === '4' || event.key === 'Numpad4')
            validateAnswer(4);
            songIsPlaying = true;
        if (event.key === '5' || event.key === 'Numpad5')
            validateAnswer(5);
            songIsPlaying = true;
        if (event.key === '6' || event.key === 'Numpad6')
            validateAnswer(6);
            songIsPlaying = true;
        if (event.key === '7' || event.key === 'Numpad7')
            validateAnswer(7);
            songIsPlaying = true;
        if (event.key === '8' || event.key === 'Numpad8')
            validateAnswer(8);
            songIsPlaying = true;
        if (event.key === '9' || event.key === 'Numpad9')
            validateAnswer(9);
            songIsPlaying = true;

        if (songIsPlaying) {
            bgMusic.play();
            bgMusic.volume = 0.6;
        }
        }
);


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

    function playCorrectSound() {
        correctSound.play();
    }

    function playWrongSound() {
        wrongSound.play();
    }
})