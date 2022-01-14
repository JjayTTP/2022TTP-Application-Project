const containder = document.getElementbyId('container');
const text = document.getElementbyId('text');

const totalTime = 7500;
const breatheTime = (totalTime/5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
    text.innerText = 'Breathe In!';
    containder.className = 'container grow';

    setTimeout(() => {
        text.innerText = 'Hold';

        setTimeout(() => {
            text.innerText = 'Breathe Out!';
            containder.className = 'container shrink';

        }, holdTime);
    }, breatheTime);   
}

setInterval(breathAnimation, totalTime);