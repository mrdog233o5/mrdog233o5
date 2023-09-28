let obj = document.getElementById('infos');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    obj.style.marginTop = value * 2.5 + 'px'
}, { passive: true });