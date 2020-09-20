const dayElement = document.getElementById("day");
const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minute");
const secondElement = document.getElementById("second");
document.title = `Countdown to ${new Date().getFullYear() + 1}`;

function countdown() {
  //curent date
  const date = new Date();
  // new year
  const newYear = new Date(`1 Jan ${date.getFullYear() + 1}`);
  // total seconds till new year
  const totalSeconds = Number((newYear - date) / 1000);
  // days left
  const days = Math.floor(totalSeconds / 3600 / 24);
  // hours left
  const hours = Math.floor(totalSeconds / 3600) % 24;
  // minutes left
  const mins = Math.floor(totalSeconds / 60) % 60;
  // seconds left
  const seconds = Math.floor(totalSeconds) % 60;

  dayElement.innerHTML = formatTime(days);
  hourElement.innerHTML = formatTime(hours);
  minuteElement.innerHTML = formatTime(mins);
  secondElement.innerHTML = formatTime(seconds);
}
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
countdown();
setInterval(countdown, 1000);
