let ok = document.getElementById("Sagar");
let sec = document.getElementById("sec");
let minute = document.getElementById("minute");
let hour = document.getElementById("hour");
let reset = document.getElementById("Reset");
let mili = document.getElementById("mili");

let intervalId;
let isRunning = false;

ok.addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    ok.innerText = "Stop";

    intervalId = setInterval(() => {
      let currentMili = parseInt(mili.innerText);
      let currentSec = parseInt(sec.innerText);
      let currentMin = parseInt(minute.innerText);
      let currentHour = parseInt(hour.innerText);

      currentMili++;
      if (currentMili === 100) {
        currentMili = 0;
        currentSec++;
      }

      if (currentSec === 60) {
        currentSec = 0;
        currentMin++;
      }

      if (currentMin === 60) {
        currentMin = 0;
        currentHour++;
      }

      mili.innerText = currentMili < 10 ? "0" + currentMili : currentMili;
      sec.innerText = currentSec < 10 ? "0" + currentSec : currentSec;
      minute.innerText = currentMin < 10 ? "0" + currentMin : currentMin;
      hour.innerText = currentHour < 10 ? "0" + currentHour : currentHour;
    }, 10); // use 10ms for better performance
  } else {
    clearInterval(intervalId);
    isRunning = false;
    ok.innerText = "Start";
  }
});

reset.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  isRunning = false;

  mili.innerText = "00";
  sec.innerText = "00";
  minute.innerText = "00";
  hour.innerText = "00";

  ok.innerText = "Start";
});
