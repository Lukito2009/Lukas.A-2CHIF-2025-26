export class Game {
  private lanes: Plate[][] = [[], []];

  addPlate(lane: 1 | 2) {
    const plate = new Plate();

    if (lane === 1) {
      this.lanes[0]!.push(plate);
    } else {
      this.lanes[1]!.push(plate);
    }

    this.updatePosition();
  }
  private updatePosition() {
    for (let i = 0; i < this.lanes[0]!.length; i++) {
      const plate = this.lanes[0]![i];
      if (!plate) return;

      const x = 200 + i * 40;
      const y = 300;

      plate.setX(x);
      plate.setY(y);
    }

    for (let j = 0; j < this.lanes[1]!.length; j++) {
      const plate = this.lanes[1]![j];
      if (!plate) return;

      const x = 200 + j * 40;

      plate.setX(x);
    }
  }
}

class Plate {
  private svg = document.getElementById('svg') as unknown as SVGSVGElement;

  private rect: SVGRectElement;

  constructor() {
    this.rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

    this.rect.setAttribute('x', '350');
    this.rect.setAttribute('y', '500');
    this.rect.setAttribute('width', '30');
    this.rect.setAttribute('height', '120');
    this.rect.setAttribute('fill', '#60A5FA');
    this.svg.appendChild(this.rect);
  }
  setX(x: number) {
    this.rect.setAttribute('x', String(x));
  }
  setY(y: number) {
    this.rect.setAttribute('y', String(y));
  }
}
