let ok = document.getElementById("Sagar");
let sec = document.getElementById("sec");
let minute = document.getElementById("minute");
let hour = document.getElementById("hour");
let reset = document.getElementById("Reset");
let mili = document.getElementById("mili")

let intervalId;
let isRunning = false;

ok.addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    ok.innerText = "Stop";

    intervalId = setInterval(() => {
      let currentMili= parseInt(mili.innerText);
      let currentSec = parseInt(sec.innerText);
      let currentMin = parseInt(minute.innerText);
      let currentHour = parseInt(hour.innerText);

      currentMili++;
      if (currentMili === 100) {
        currentSec++;
        currentMili = 0;
        
      }

      if (currentSec === 60) {
        currentSec = 0;
        currentMin++;
        currentMili = 0;
      }
      if (currentMin === 60) {
        currentSec = 0;
        currentMin=0;
        currentMili = 0;
        currentHour++;
      }
      if (currentMili<10) {
        mili.innerText = "0"+currentMili
      }
      else{
        mili.innerText = currentMili
      }
      if (currentSec<10) {
        sec.innerText = "0"+currentSec
      }
      else{
        sec.innerText = currentSec
      }
      if (currentMin<10) {
        minute.innerText = "0"+currentMin
      }
      else{
        minute.innerText = currentMin
      }
      if (currentHour<10) {
        hournnerText = "0"+currentHour
      }
      else{
        hour.innerText = currentHour
      }
      // mili.innerText= currentMili;
      // sec.innerText = String(currentSec).padStart(2, "0");
      // minute.innerText = String(currentMin).padStart(2, "0");
      // hour.innerText = String(currentHour).padStart(2, "0");
    }, 1);

  } else {
    clearInterval(intervalId);
    intervalId = null;
    isRunning = false;
    ok.innerText = "Start";
  }
});

reset.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  isRunning = false;
  mili.innrrText ="00";
  sec.innerText = "00";
  minute.innerText = "00";
  hour.innerText ="00";
  ok.innerText = "Start";
});
