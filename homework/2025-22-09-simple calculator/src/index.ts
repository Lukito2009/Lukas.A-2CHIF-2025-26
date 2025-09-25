
//const select = document.getElementById('ImgrementSelect') as HTMLSelectElement;
const calculate = document.getElementById("calculate") as HTMLButtonElement;
const result = document.getElementById('result') as HTMLParagraphElement;
const first = document.getElementById('firstNum') as HTMLInputElement;
const second = document.getElementById('secondNum') as HTMLInputElement;
const OperationSelect = document.getElementById('operation') as HTMLInputElement;



calculate.addEventListener('click', () => {
    if (first.value !== '' && second.value !== '') {
    if (OperationSelect.value === '+') {
      result.textContent = String(parseInt(first.value) + parseInt(second.value));
    } else if (OperationSelect.value === '-') {
      result.textContent = String(parseInt(first.value) - parseInt(second.value));
    } else if (OperationSelect.value === '*') {
      result.textContent = String(parseInt(first.value) * parseInt(second.value));
    } else if (OperationSelect.value === '/') {
      if (second.value === '0') {
        result.textContent = "You can't divide by Zero!";
        return;
      }
      result.textContent = `${String(parseInt(first.value) / parseInt(second.value))}`;
    }
  }else{
    result.textContent = "Please fill in the numbenrs!";
  }
  
})

