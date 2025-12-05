// Words to Guess

const wordsToGuess = ["coffee", "rainbow", "javascript", "sun", "bottle"];

//Grab all DOM Elements

const hangmanImage = document.querySelector("#hangman-img");
const wordDisplay = document.querySelector("#word-display");
const wrongLetterSpan = document.querySelector("#wrong-letters");
const guessesLeftSpan = document.querySelector("#guesses-left");
const letterButtons =  document.querySelectorAll(".game__buttons__letter");
const resultMsg = document.querySelector("#result-message");
const playAgainBtn = document.querySelector("#play-again-btn");

//Game Initial Stage

let selectedWord = "";
let correctGuesses = [];
let wrongGuesses = [];
let remainingGuesses = 10;

//Generating a random word from the guess word array

const randomWord = () => {
    const randomIndex = Math.floor(Math.random() * wordsToGuess.length);
    return wordsToGuess[randomIndex];
};


//Hiding and revealing the word with underscores

const revealAndHideWord = () => {
    const display = selectedWord.split("").map((letter) => (correctGuesses.includes(letter)? letter : "_")).join(" ");

    wordDisplay.textContent = display;

}

//Initial stage of the game

const initialGameStage = () => {
    selectedWord = randomWord();
    //console.log(selectedWord);
    correctGuesses = [];
    wrongGuesses = [];
    remainingGuesses = 10;

    hangmanImage.src = "./assets/img/h-0.JPG";
    wrongLetterSpan.textContent = "";
    guessesLeftSpan.textContent = remainingGuesses;
    resultMsg.textContent = "";

    for (let i = 0; i < letterButtons.length ; i++ )
    {
        letterButtons[i].disabled = false;
    }

    revealAndHideWord();

};

// Starting the game

initialGameStage();



const updateImg =() => {
    const gameStage = wrongGuesses.length;
    hangmanImage.src = `./assets/img/h-${gameStage}.jpg`;
};

const disableButtons = (value) => {
    for (let i= 0; i < letterButtons.length; i++)
    {
        letterButtons[i].disabled = value;
    }
};

const gameWin = () => {
    if(!wordDisplay.textContent.includes("_")) {
        resultMsg.textContent = "You Win!";
        disableButtons(true);
    }
};

const gameLose = () => {
    if(remainingGuesses <= 0) {
        resultMsg.textContent = "You Lose!";
        disableButtons(true);
    }
};

const clickLetter = (event) => {
    const button = event.target;
    const letter = button.textContent.toLowerCase(); 
    button.diabled = true;

    if (selectedWord.includes(letter)) {
        if(!correctGuesses.includes(letter)) {
            correctGuesses.push(letter);
        }
    revealAndHideWord();
    gameWin();
    }

    else {
        if(!wrongGuesses.includes(letter)) {
            wrongGuesses.push(letter);
            remainingGuesses--;
        
      wrongLetterSpan.textContent = wrongGuesses.join(" ");
        guessesLeftSpan.textContent = remainingGuesses;
        updateImg();
        gameLose();
    }
}
};

for (let i = 0; i < letterButtons.length; i++) {
    letterButtons[i].addEventListener("click", clickLetter);
}

playAgainBtn.addEventListener("click", () => {
    initialGameStage();
    updateImg();
});













