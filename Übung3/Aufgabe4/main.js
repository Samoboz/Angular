const outerBox = document.getElementById("outerBox");
const innerBox = document.getElementById("innerBox");

outerBox.addEventListener("click", function (event) {
  // outerbox
  const outerWidth = outerBox.clientWidth;
  const outerHeight = outerBox.clientHeight;

  //innerBox
  const innerWidth = innerBox.offsetWidth;
  const innerHeight = innerBox.offsetHeight;

  const clickX = event.offsetX;
  const clickY = event.offsetY;

  let targetX = clickX - innerWidth / 2;
  let targetY = clickY - innerHeight / 2;

  targetX = Math.max(0, targetX);
  targetX = Math.min(outerWidth - innerWidth, targetX);

  targetY = Math.max(0, targetY);
  targetY = Math.min(outerHeight - innerHeight, targetY);

  innerBox.style.top = targetY + "px";
  innerBox.style.left = targetX + "px";
});

document.addEventListener("keydown", function () {});
