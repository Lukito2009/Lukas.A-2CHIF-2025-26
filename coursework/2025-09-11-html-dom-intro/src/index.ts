const counterbutton = document.getElementById("counterButton") as HTMLButtonElement;
const counter = document.getElementById(`counter`) as HTMLParagraphElement;
const counterdegrease = document.getElementById("count") as HTMLButtonElement;
const Imgrement = document.getElementById('Imgrement') as HTMLInputElement;
const select = document.getElementById('ImgrementSelect') as HTMLSelectElement;
 
let clickcounter = 0;
select.addEventListener('change', () => {
    Imgrement.value = select.value
})
 
counterbutton.addEventListener('click', () => {
    clickcounter += parseInt(Imgrement.value);
    counter.textContent = `${clickcounter}`
    if (clickcounter >= 0){
        counter.style.color = 'black';
    }
})
counterdegrease.addEventListener('click', () => {
    clickcounter -= parseInt(Imgrement.value);
    counter.textContent = `${clickcounter}`
    if (clickcounter < 0){
        counter.style.color = 'red';
    }
})
 