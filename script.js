let secretNumber = Math.trunc(Math.random() * 20 + 1);

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}
const scoreValue = document.querySelector('.score');
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage('⛔️ No number!')

        // When guess is true'
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber;
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 0) {
            displayMessage(guess > secretNumber ? '📈 To high!' : '📉 To low!')
            score--
            scoreValue.textContent = score ;
        } else {
            displayMessage('💀 you lost the game')
        }
    }
})
document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    score = 20;
    scoreValue.textContent = score;
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.guess').value = '';
})

