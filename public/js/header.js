"use strict";

var header = document.querySelector('[header]');
var newElement = document.createElement('div');
var page = header.getAttribute('page');
console.log(page);
newElement.innerHTML = "\n    <header id=\"navBarHeader\">\n        <nav class=\"navBar\">\n            <div class=\"left\">\n                <a href=\"/\" id=\"btnHome\">home</a>\n            </div>\n            <div class=\"right\">\n                <a href=\"/pages/contact.html\" id=\"btnContact\">contact</a>\n                <a href=\"/pages/programs/\" id=\"btnPrograms\">programs</a>\n            </div>\n        </nav> \n    </header>\n";
header.appendChild(newElement);
document.getElementById("btn" + page).setAttribute('class', 'active');