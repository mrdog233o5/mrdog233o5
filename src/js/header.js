let header = document.querySelector('header');
let newElement = document.createElement('div');
let page = header.getAttribute('page');

console.log(page);
newElement.innerHTML = `
<div class="space"></div>
<div class="navBarContainer">
    <div class="navBar">
        <div class="url"><a href="/" id="btnHome"><div class="center"><h3>about</h3></div></a></div>
        <div class="url"><a href="/pages/programs/" id="btnPrograms"><div class="center"><h3>repos</h3></div></a></div>
    </div>
</div>
`;

header.appendChild(newElement);
document.getElementById("btn"+page).setAttribute('class', 'active');