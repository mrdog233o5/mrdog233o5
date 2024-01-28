"use strict";

window.onload = function () {
  var target = document.getElementsByClassName("tilt")[0];
  var content = target.getElementsByClassName("content")[0];
  var isMouseOver = false;
  var centerX;
  var centerY;
  var mouseX;
  var mouseY;
  function resetStyle() {
    target.style.transform = "";
    target.style.height = "0px";
  }
  function sizeControl() {
    var contentWidth = content.clientWidth;
    var contentHeight = content.clientHeight;
    target.style.width = "".concat(contentWidth, "px");
    target.style.height = "".concat(contentHeight, "px");
    window.requestAnimationFrame(sizeControl);
  }
  window.requestAnimationFrame(sizeControl);

  // tile effect

  function tiltEffect() {
    if (isMouseOver) {
      var deltaScale = 18.0;
      var transformPhrase = "translate(".concat((mouseX - centerX) / deltaScale, "px, ").concat((mouseY - centerY) / deltaScale, "px)");
      target.style.transform = transformPhrase;
      requestAnimationFrame(tiltEffect);
    }
  }
  target.addEventListener("mouseenter", function () {
    isMouseOver = true;
    var rect = target.getBoundingClientRect();
    centerX = rect.left + rect.width / 2;
    centerY = rect.top + rect.height / 2;
    requestAnimationFrame(tiltEffect);
  });
  target.addEventListener("mouseleave", function () {
    isMouseOver = false;
    resetStyle();
  });
  document.addEventListener("mousemove", function (event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
  });
};