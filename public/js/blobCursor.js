"use strict";

/* -- Glow effect -- */

var blob = document.getElementById("blob");
window.onpointermove = function (event) {
  var clientX = event.clientX,
    clientY = event.clientY;
  var momentumX = clientX + clientX - blob.offsetLeft;
  var momentumY = clientY + clientY - blob.offsetTop;
  blob.animate({
    left: "".concat(momentumX, "px"),
    top: "".concat(momentumY, "px")
  }, {
    duration: 1500,
    fill: "forwards"
  });
  blob.animate({
    left: "".concat(clientX, "px"),
    top: "".concat(clientY, "px")
  }, {
    duration: 3000,
    fill: "forwards"
  });
  blob.style.left = "".concat(clientX, "px");
  blob.style.top = "".concat(clientY, "px");
};