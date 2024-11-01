const display = document.getElementById("timer");
let startTime = 0;
let elapsedTime = 0;
let timerRunning = false;
let timerInterval;

function startTimer() {
  if (!timerRunning) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTimer, 10);
    timerRunning = true;
  }
}

function stopTimer() {
  if (timerRunning) {
    elapsedTime = Date.now() - startTime;
    clearInterval(timerInterval);
    timerRunning = false;
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  startTime = 0;
  display.textContent = "00:00:000";
  timerRunning = false;
}

function updateTimer() {
  elapsedTime = Date.now() - startTime;
  const hours = Math.floor(elapsedTime / (10000 * 3600));;
  const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  const seconds = Math.floor((elapsedTime / 1000) % 60);
  const milliseconds = elapsedTime % 1000;
  display.textContent = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds.toString().padStart(3, "0")}`;
}