"use strict";

/* -- Glow effect -- */

var blob = document.getElementById("blob");
window.onpointermove = function (event) {
  var clientX = event.clientX,
    clientY = event.clientY;
  blob.animate({
    left: "".concat(clientX, "px"),
    top: "".concat(clientY, "px")
  }, {
    duration: 3000,
    fill: "forwards"
  });
};