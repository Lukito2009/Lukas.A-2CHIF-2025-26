const counterButton = document.getElementById(`counterButton`) as HTMLButtonElement;
const decreaseButton = document.getElementById(`decreaseButton`) as HTMLButtonElement;
const counter = document.getElementById(`counter`) as HTMLParagraphElement;

let clickCount = 0;
counterButton.addEventListener(`click`, () => {
    clickCount++;
    counter.textContent = `${clickCount}`;
    if (clickCount >= 0) {
        counter.style.color = `black`;
    }

});
decreaseButton.addEventListener(`click`, () => {
    clickCount--;
    counter.textContent = `${clickCount}`;
    if (clickCount < 0) {
        counter.style.color = `red`;
    }
});