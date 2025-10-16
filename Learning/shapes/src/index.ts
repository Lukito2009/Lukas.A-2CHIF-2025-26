const select = document.getElementById("shape") as HTMLSelectElement;
const button = document.getElementById("button") as HTMLButtonElement;
let value =""

button.addEventListener('click', () => {
    value = select.value
    
    if(value ==="rect"){
        const svg = document.getElementById("svg") as unknown as SVGRectElement;
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect') as SVGRectElement;

        rect.setAttribute('fill', 'blue');
        rect.setAttribute('x', `${Math.random() * 200}`)
        rect.setAttribute('y', `${Math.random() * 200}`)
        rect.setAttribute('width', `${Math.random() * 200}`)
        rect.setAttribute('height', `${Math.random() * 200}`)
        svg.appendChild(rect)
    }else {
        const svg = document.getElementById("svg") as unknown as SVGCircleElement;
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle') as SVGCircleElement;

        circle.setAttribute('fill', 'lime');
            circle.setAttribute('stroke', 'green');
            circle.setAttribute('cx', `${Math.random() * 200}`);
            circle.setAttribute('cy', `${Math.random() * 200}`);
            circle.setAttribute(`r`, `${Math.random() * 50}`);

            svg.appendChild(circle);

    }
})