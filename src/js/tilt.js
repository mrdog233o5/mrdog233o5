window.onload = function() {

    let target = document.getElementsByClassName("tilt")[0];
    let content = target.getElementsByClassName("content")[0];
    let isMouseOver = false;
    let centerX;
    let centerY;
    let mouseX;
    let mouseY;

    function resetStyle() {
        target.style.transform = "";
        target.style.height = "0px";
    }

    function sizeControl() {
        var contentWidth = content.clientWidth;
        var contentHeight = content.clientHeight;
        target.style.width = `${contentWidth}px`;
        target.style.height = `${contentHeight}px`;
        window.requestAnimationFrame(sizeControl);
    }
    window.requestAnimationFrame(sizeControl);

    // tile effect

    function tiltEffect() {
        if (isMouseOver) {
            const deltaScale = 18.0;
            var transformPhrase = `translate(${ ( mouseX - centerX ) / deltaScale }px, ${ ( mouseY - centerY ) / deltaScale }px)`;
            target.style.transform = transformPhrase; 
            requestAnimationFrame(tiltEffect);
        }
    }

    target.addEventListener("mouseenter", () => {
        isMouseOver = true;
        var rect = target.getBoundingClientRect();
        centerX = rect.left + rect.width / 2;
        centerY = rect.top + rect.height / 2;
        requestAnimationFrame(tiltEffect);
    });

    target.addEventListener("mouseleave", () => {
        isMouseOver = false;
        resetStyle();
    });

    document.addEventListener("mousemove", function(event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });

};

