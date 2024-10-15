const tardisBox = document.querySelector(".tardis_box");
let frameWidth = document.documentElement.clientWidth;
let frameHeight = document.documentElement.clientHeight;
let tardisBoxPositionY = 0;
let tardisBoxPositionX = 0;
const keysPressed = {};

document.addEventListener("keydown", (event) => {
    keysPressed[event.code] = true;
});
document.addEventListener("keyup", (event) => {
    keysPressed[event.code] = false;
});

function updatePosition() {
    const moveStep = 5;
    const boxCoordinates = tardisBox.getBoundingClientRect();
    if (keysPressed["ArrowUp"] || keysPressed["KeyW"]) {
        if (boxCoordinates.top > 0) {
            tardisBoxPositionY -= moveStep;
        }
    }
    if (keysPressed["ArrowDown"] || keysPressed["KeyS"]) {
        if (boxCoordinates.bottom < frameHeight) {
            tardisBoxPositionY += moveStep;
        }
    }
    if (keysPressed["ArrowRight"] || keysPressed["KeyD"]) {
        if (boxCoordinates.right < frameWidth) {
            tardisBoxPositionX += moveStep;
        }
    }
    if (keysPressed["ArrowLeft"] || keysPressed["KeyA"]) {
        if (boxCoordinates.left > 0) {
            tardisBoxPositionX -= moveStep; 
        }
    }

    tardisBox.style.top = `${tardisBoxPositionY}px`;
    tardisBox.style.left = `${tardisBoxPositionX}px`;
}

function gameLoop() {
    updatePosition();
    requestAnimationFrame(gameLoop);
}

gameLoop();

window.addEventListener("resize", () => {
    frameWidth = document.documentElement.clientWidth;
    frameHeight = document.documentElement.clientHeight;
});
