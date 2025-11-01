const secHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function handleTime() {
  setInterval(moveClockHands, 1000)
}

function moveClockHands() {
  const currentTime = new Date();
  const seconds = currentTime.getSeconds();
  const minutes = currentTime.getMinutes();
  const hours = currentTime.getHours();

  secHand.style.transform = `rotate(${seconds * 6}deg)`;
  minHand.style.transform = `rotate(${minutes * 6}deg)`;
  hourHand.style.transform = `rotate(${hours * 6}deg)`;
}

handleTime();