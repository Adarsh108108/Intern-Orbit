let countdownInterval;

function startCountdown() {
  const dateInput = document.getElementById('datetime').value;
  const countdownDisplay = document.getElementById('timer');

  if (!dateInput) {
    alert("Please select a date and time!");
    return;
  }

  const targetTime = new Date(dateInput).getTime();

  clearInterval(countdownInterval); // clear previous countdown if any

  countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetTime - now;

    if (distance < 0) {
      clearInterval(countdownInterval);
      countdownDisplay.textContent = "Time's up!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownDisplay.textContent = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
  }, 1000);
}
