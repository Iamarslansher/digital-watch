function digitalClock() {
  // ====  VAriables Get ===>>>

  var hoursVariable = document.getElementById("hours");
  var minutesVariable = document.getElementById("minutes");
  var secondsVariable = document.getElementById("seconds");
  var periodVariable = document.getElementById("period");

  // === Values Get ===>>>

  var currentDate = new Date();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var second = currentDate.getSeconds();

  // === Conditions ===>>>

  var amPm = hours >= 12 ? "PM" : "AM";

  if (hours > 12) {
    hours = hours - 12;
  }

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  second = second < 10 ? "0" + second : second;

  // VAlues assign ===>>>

  hoursVariable.innerHTML = hours;
  minutesVariable.innerHTML = minutes;
  secondsVariable.innerHTML = second;
  periodVariable.innerHTML = amPm;
}

var setIntervalRef = setInterval(digitalClock, 1000);

function startClock() {
  setIntervalRef = setInterval(digitalClock, 1000);
}

function stopClock() {
  clearInterval(setIntervalRef);
}
