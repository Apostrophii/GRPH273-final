window.onload = function() {
    speed = 100;
    direction = 1;
    box = document.getElementById('box');
    box.addEventListener('mouseover', function () {
        leftPos = box.offsetLeft;
        rightPos = leftPos + box.offsetWidth;
        if (rightPos > document.body.offsetWidth) {
            direction = -1;
        }
        if (leftPos < 0) {
            direction = 1;
        }
        box.style.left = (leftPos + speed * direction) + 'px';
    });
}
