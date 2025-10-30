let score = 0;
let timeLeft = 10;
let gameStarted = false;
const target = document.getElementById("target");
const timer = document.getElementById("timer");
const scoreDisplay = document.getElementById("score");
const startBtn = document.getElementById("startBtn");
const message = document.getElementById("message");

startBtn.addEventListener("click", startGame);
target.addEventListener("click", tapTarget);

function startGame() {
  if (gameStarted) return;
  gameStarted = true;
  score = 0;
  timeLeft = 10;
  scoreDisplay.textContent = "Score: 0";
  timer.textContent = "Time: 10s";
  message.textContent = "";
  target.style.display = "block";
  moveTarget();

  const countdown = setInterval(() => {
    timeLeft--;
    timer.textContent = `Time: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(countdown);
      endGame();
    }
  }, 1000);
}

function tapTarget() {
  if (!gameStarted) return;
  score++;
  scoreDisplay.textContent = `Score: ${score}`;
  moveTarget();
}

function moveTarget() {
  const gameArea = document.getElementById("gameArea");
  const x = Math.random() * (gameArea.clientWidth - 40);
  const y = Math.random() * (gameArea.clientHeight - 40);
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
}

function endGame() {
  gameStarted = false;
  target.style.display = "none";
  if (score < 10) {
    message.textContent = `😅 Score ${score}! Keep training, rookie!`;
  } else if (score < 20) {
    message.textContent = `🕹️ Score ${score}! Great job, retro player!`;
  } else {
    message.textContent = `🏆 Score ${score}! You're a Tap Master!`;
  }
}
