/* -- Glow effect -- */
const blob = document.getElementById("blob");

window.onpointermove = event => { 
    const { clientX, clientY } = event;

    const momentumX = clientX + clientX - blob.offsetLeft;
    const momentumY = clientY + clientY - blob.offsetTop;

    blob.animate({
        left: `${momentumX}px`,
        top: `${momentumY}px`
    }, { duration: 1500, fill: "forwards" });
    
    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, { duration: 3000, fill: "forwards" });
    blob.style.left = `${clientX}px`;
    blob.style.top = `${clientY}px`;

}
