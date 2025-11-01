const secHand = document.querySelector('.sec-hand');

function handleTime() {
  setInterval(moveClockHands, 250)
}

function moveClockHands() {
  // seconds, so the sechand class should rotate everysecond 1degree?
  //first get the seconds time
  //seconds go every second
  const currentTime = new Date();
  secondsRotation = currentTime.getSeconds();
  secHand.style.transform = `rotate(${secondsRotation * 6}deg)`;
  console.log(currentTime.getSeconds());
}

handleTime();