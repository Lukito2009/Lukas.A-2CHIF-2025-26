const first = document.getElementById('first') as HTMLInputElement;
const second = document.getElementById('second') as HTMLInputElement;
const select = document.getElementById('operation') as HTMLSelectElement;
const button = document.getElementById('calculate') as HTMLButtonElement;
const result = document.getElementById('result') as HTMLParagraphElement;

button.addEventListener('click', () => {
  if (select.value === '+') {
    result.textContent = String(parseInt(first.value) + parseInt(second.value));
  } else if (select.value === '-') {
    result.textContent = String(parseInt(first.value) - parseInt(second.value));
  } else if (select.value === '*') {
    result.textContent = String(parseInt(first.value) * parseInt(second.value));
  } else if (select.value === '/') {
    if(second.value === "0"){
        result.textContent = "ERROR";
    } else {
    result.textContent = String(parseInt(first.value) / parseInt(second.value));
    }
  } 
      }
  
);
