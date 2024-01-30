const hangmanWords = [
    "apple",
    "banana",
    "elephant",
    "giraffe",
    "umbrella",
    "xylophone",
    "jazz",
    "kangaroo",
    "lighthouse",
    "moonlight",
    "octopus",
    "penguin",
    "quasar",
    "rhythm",
    "sunflower",
    "tornado",
    "umbrella",
    "vortex",
    "watermelon",
    "xylophone",
    "yogurt",
    "zeppelin"
];


let index = Math.floor(Math.random() * hangmanWords.length);
let secretWord = hangmanWords[index];
let guessedLetters = [];
let attempts = 5;
const wordElement = document.getElementById("word");
const buttonElement = document.getElementById("guess-button");
const inputElement = document.getElementById("guess");
const statusElement = document.getElementById("status-div")
const attemptsDiv = document.getElementById("attempts-remaining");

function updateAttempts() {
    attemptsDiv.innerText = attempts;
}
updateAttempts();

function updateGuess(letter) {
    if (guessedLetters.includes(letter)) {
        statusElement.innerText = "You already guessed that!";
        return;
    }
    if (!secretWord.split('').includes(letter)) {
        attempts--;
        updateAttempts();
    }
    guessedLetters.push(letter);
    displayWord();
    checkWinOrLose();
}

function displayWord() {
    let display = "";
    for (let char of secretWord) {
        if (guessedLetters.includes(char)) {
            display += `${char} `;
        }
        else {
            display += '_ ';
        }
    }
    wordElement.innerText = display;
}

displayWord();

function guess() {
    let input = inputElement.value;
    if (/^[a-zA-Z]$/.test(input)) {
        updateGuess(input.toLowerCase());
    }
    else {
        statusElement.innerText = "Invalid input."
    }
    inputElement.value = "";
}

buttonElement.addEventListener('click', guess);

function checkWinOrLose() {
    if (attempts <= 0) {
        statusElement.innerText = `You lose! The word was ${secretWord}`;
        buttonElement.removeEventListener('click', guess);
    }
    else {
        for (let char of secretWord) {
            if (!guessedLetters.includes(char)) {
                return;
            }
        }
        statusElement.innerText = "You win!";
    }
}