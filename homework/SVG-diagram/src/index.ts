const svg = document.getElementById('svg') as unknown as SVGRectElement;
const diagram = document.getElementById('diagram') as HTMLButtonElement;
const line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line') as SVGLineElement;
const line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line') as SVGLineElement;

line1.setAttribute('x1', '0')
line1.setAttribute('y1', '0')
line1.setAttribute('x2', ' 0')
line1.setAttribute('y2', '600')
line1.setAttribute('stroke', 'black')
line1.setAttribute('stroke-width', '3')
svg.appendChild(line1)

line2.setAttribute('x1', '0')
line2.setAttribute('y1', '600')
line2.setAttribute('x2', ' 1200')
line2.setAttribute('y2', '600')
line2.setAttribute('stroke', 'black')
line2.setAttribute('stroke-width', '3')
svg.appendChild(line2)




function getValues() {
  const values: string[] = [];
  for (let i = 1; i <= 12; i++) {
    const input = document.getElementById(`m${i}`) as HTMLInputElement;

    if (input.value === "") {
      values.push('0'); // Wenn das Feld leer ist
    } else {
      values.push(input.value); // Wenn etwas eingegeben wurde
    }
  }
  console.log(values)
  return values;
}


diagram.addEventListener('click', () => {
  const values = getValues();
  for (let i = 0; i < values.length; i++) {
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      const x = 5 + 90 * i; // Abstand zwischen Balken
      const height = values[i] * 50; // Höhe skalieren
      const y = 600 - height; // Von unten zeichnen
  
      rect.setAttribute('fill', 'blue');
      rect.setAttribute('x', x.toString());
      rect.setAttribute('y', y.toString());
      rect.setAttribute('width', '80');
      rect.setAttribute('height', height.toString());
  
      svg.appendChild(rect);
    }
})





