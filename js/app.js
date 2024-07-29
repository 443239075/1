const countdownDisplay = document.getElementById('countdown-display');
const targetDateInput = document.getElementById('target-date-input');
const resetButton = document.getElementById('reset-button');

let targetDate = new Date(targetDateInput.value);

targetDateInput.addEventListener('input', () => {
  targetDate = new Date(targetDateInput.value);
});

resetButton.addEventListener('click', () => {
  targetDate = new Date();
  targetDateInput.value = targetDate.toISOString().slice(0, 16);
});

setInterval(() => {
  const currentTime = new Date();
  const timeRemaining = targetDate.getTime() - currentTime.getTime();

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  countdownDisplay.textContent = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}, 1000);
