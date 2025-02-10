let randomNumber;
let attempts;

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("message").textContent = "";
    document.getElementById("userGuess").value = "";
    document.getElementById("restart").style.display = "none";
}

function checkGuess() {
    let userGuess = parseInt(document.getElementById("userGuess").value);
    attempts++;

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        document.getElementById("message").textContent = "Введите число от 1 до 100!";
        return;
    }

    if (userGuess < randomNumber) {
        document.getElementById("message").textContent = "Больше!";
    } else if (userGuess > randomNumber) {
        document.getElementById("message").textContent = "Меньше!";
    } else {
        document.getElementById("message").textContent = `Поздравляю! Вы угадали число ${randomNumber} за ${attempts} попыток.`;
        document.getElementById("restart").style.display = "block";
    }
}

startGame();
