"use strict";

var header = document.querySelector('header');
var newElement = document.createElement('div');
var page = header.getAttribute('page');
console.log(page);
newElement.innerHTML = "\n<div class=\"space\"></div>\n<div class=\"navBarContainer\">\n    <div class=\"navBar\">\n        <div class=\"url\"><a href=\"/\" id=\"btnHome\"><div class=\"center\"><h3>about</h3></div></a></div>\n        <div class=\"url\"><a href=\"/pages/programs/\" id=\"btnPrograms\"><div class=\"center\"><h3>repos</h3></div></a></div>\n    </div>\n</div>\n";
header.appendChild(newElement);
document.getElementById("btn" + page).setAttribute('class', 'active');