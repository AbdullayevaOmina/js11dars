function updateTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  var period = hours < 12 ? "AM" : "PM";

  hours = hours > 12 ? hours - 12 : hours;
  hours = hours === 0 ? 12 : hours;

  var timeString = hours + ":" + minutes + ":" + seconds + " " + period;

  var timeElement = document.getElementById("time");
  if (timeElement) {
    timeElement.innerHTML = timeString;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setInterval(updateTime, 1000);
});
