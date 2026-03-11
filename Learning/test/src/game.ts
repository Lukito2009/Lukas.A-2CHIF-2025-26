 export class PlateGame {
  private stack: Plate[] = [];

  addPlate() {
    const plate = new Plate();

    this.stack.push(plate);

    this.updatePositions();
}

  removePlate() {
    const plate = this.stack.pop();

    if (!plate) return;

    plate.remove();
  }

  private updatePositions() {
    for (let i = 0; i < this.stack.length; i++) {
      const plate = this.stack[i];
      if (!plate) continue;

      const x = 350 + i * 40;
      plate.setX(x);
    }
  }
}

class Plate {
    

  private element: SVGRectElement;

  constructor() {
    this.element = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

    this.element.setAttribute('x', '350');
    this.element.setAttribute('y', '500');
    this.element.setAttribute('width', '30');
    this.element.setAttribute('height', '120');
    this.element.setAttribute('fill', '#60A5FA');

    this.svg.appendChild(this.element);
  }

  setX(x: number) {
    this.element.setAttribute('x', String(x));
  }

  remove() {
    this.element.remove();
  }
}
