const select = document.getElementById('ImgrementSelect') as HTMLSelectElement;
const add = document.getElementById("add") as HTMLButtonElement;


let value = "";
add.addEventListener('click', () => {
    value = select.value
if (value === 'circle') {
    const svg = document.getElementById("svg") as unknown as SVGCircleElement;
    

        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle') as SVGCircleElement;

        circle.setAttribute('fill', 'lime');
        circle.setAttribute('stroke', 'green');
        circle.setAttribute('cx', `${Math.random() * 200}`);
        circle.setAttribute('cy', `${Math.random() * 200}`);
        circle.setAttribute(`r`, `${Math.random() * 50}`);

        svg.appendChild(circle);

  

} if (value === 'rect') {
    const svg = document.getElementById("svg") as unknown as SVGRectElement;
    

        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect') as SVGRectElement;

        rect.setAttribute('fill', 'red');
        rect.setAttribute('stroke', 'blue');
        rect.setAttribute('x', `${Math.random() * 200}`);
        rect.setAttribute('y', `${Math.random() * 200}`);
        rect.setAttribute(`width`, `${20 + Math.random() * 100}`);
        rect.setAttribute(`height`, `${20 + Math.random() * 50}`);

        svg.appendChild(rect);



}


});

