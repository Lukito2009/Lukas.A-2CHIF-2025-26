const button = document.getElementById('click') as HTMLButtonElement;
const svg = document.getElementById('svg') as unknown as SVGRectElement;

function getValues() {
  let values: String[] = [];
  for (let i = 1; i <= 12; i++) {
    const input = document.getElementById(`month${i}`) as HTMLInputElement;
    if (input.value === '') {
      values.push('0');
    } else {
      values.push(input.value);
    }
  }
  return values;
}

button.addEventListener('click', () => {
    const schwellwert = 6;
    
    const values = getValues();
    let colorr= "";  
    for (let i = 1; i < values.length; i++) {
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        const xy = 5 + 90 * i;
        const height = values[i] * 90;
        const yy = 600 - height;
    if(parseInt(values[i]) > schwellwert){
        colorr = "green"
    }else {
        colorr = "red"
    }

    rect.setAttribute('fill', colorr);
    rect.setAttribute('x', xy.toString());
    rect.setAttribute('y', yy.toString());
    rect.setAttribute('width', '80');
    rect.setAttribute('height', height.toString());

    svg.appendChild(rect)

  }
});
