const secHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const barSeconds = document.querySelector('.bar-seconds');

function buildClockBars() {
  for (let i = 1; i <= 60; i++) {
    const span = document.createElement('span');
    span.style.setProperty('--index', i);
    span.innerHTML = '<p></p>';
    barSeconds.appendChild(span);
  }
}

function handleTime() {
  setInterval(moveClockHands, 1000)
}

function moveClockHands() {
  const currentTime = new Date();
  const seconds = currentTime.getSeconds();
  const minutes = currentTime.getMinutes();
  const hours = currentTime.getHours();

  const secDegrees = ((seconds / 60) * 360);
  const minDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6);
  const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30);

  secHand.style.transform = `rotate(${secDegrees}deg)`;
  minHand.style.transform = `rotate(${minDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

handleTime();
buildClockBars();