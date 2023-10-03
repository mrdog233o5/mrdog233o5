let header = document.querySelector('[header]');
let newElement = document.createElement('div');
let page = header.getAttribute('page');

console.log(page);
newElement.innerHTML = `
    <header id="navBarHeader">
        <nav class="navBar">
            <div class="left">
                <a href="/" id="btnHome">home</a>
            </div>
            <div class="right">
                <a href="/pages/contact.html" id="btnContact">contact</a>
                <a href="/pages/programs/" id="btnPrograms">programs</a>
            </div>
        </nav> 
    </header>
`;

header.appendChild(newElement);
document.getElementById("btn"+page).setAttribute('class', 'active');
