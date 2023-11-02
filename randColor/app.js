setInterval(() => {
  let circleElements = document.querySelector("body");
  let color = Math.random().toString(16).slice(2, 8);
  circleElements.style.backgroundColor = "#" + color;
  circleElements.style.color = "#" + color;
  document.querySelector("div").innerHTML = "#" + color;
}, 1000);