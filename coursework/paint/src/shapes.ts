export abstract class Shape {
  constructor(
    protected svgContainer: SVGSVGElement,
    protected start: Point,
  ) {}
  public abstract updatePosition(start: Point, end: Point): void;
  public abstract contains(p: Point): boolean;
  public abstract set tempMode(isTemp: boolean);
  public abstract set select(isSelected: boolean);
}

export type Point = {
  x: number;
  y: number;
};

export class Circle extends Shape {
  private center: Point = { x: 0, y: 0 };
  private radius = 0;
  private circleElement: SVGCircleElement;

  constructor(
    svgContainer: SVGSVGElement,
    protected start: Point,
  ) {
    super(svgContainer, start);
    this.circleElement = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    svgContainer.appendChild(this.circleElement);
  }

  public override updatePosition(start: Point, end: Point): void {
    this.radius = Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));
    this.center = start;

    this.circleElement.setAttribute('cx', `${start.x}`);
    this.circleElement.setAttribute('cy', `${start.y}`);
    this.circleElement.setAttribute('r', `${this.radius}`);
  }

  public override contains(p: Point): boolean {
    const dx = p.x - this.center.x;
    const dy = p.y - this.center.y;

    return dx * dx + dy * dy <= this.radius * this.radius;
  }

  public override set tempMode(isTemp: boolean) {
    if (isTemp) {
      this.circleElement.classList.add('temp');
    } else {
      this.circleElement.classList.remove('temp');
    }
  }
  public override set select(isSelected: boolean) {
    if (isSelected) {
      this.circleElement.classList.add('selected');
    } else {
      this.circleElement.classList.remove('selected');
    }
  }
}
export type Size = {
  width: number;
  height: number;
};

export class Rectangle extends Shape {
  private position: Point = { x: 0, y: 0 };
  private size: Size = { width: 0, height: 0 };
  private rectElement: SVGRectElement;

  private width = 0;
  private height = 0;

  constructor(
    svgContainer: SVGSVGElement,
    protected start: Point,
  ) {
    super(svgContainer, start);
    this.rectElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    svgContainer.appendChild(this.rectElement);
  }

  public override updatePosition(start: Point, end: Point): void {
    this.width = Math.abs(end.x - start.x);
    this.height = Math.abs(end.y - start.y);

    this.position = {
      x: Math.min(start.x, end.x),
      y: Math.min(start.y, end.y),
    };

    this.rectElement.setAttribute('x', `${this.position.x}`);
    this.rectElement.setAttribute('y', `${this.position.y}`);
    this.rectElement.setAttribute('width', `${this.width}`);
    this.rectElement.setAttribute('height', `${this.height}`);
  }

  public override contains(p: Point): boolean {
    if (p.x <= this.width + this.position.x && p.x >= this.position.x && p.y <= this.height + this.position.y && p.y >= this.position.y) {
      return true;
    } else {
      return false;
    }
  }

  public override set tempMode(isTemp: boolean) {
    if (isTemp) {
      this.rectElement.classList.add('temp');
    } else {
      this.rectElement.classList.remove('temp');
    }
  }
  public override set select(isSelected: boolean) {
    if (isSelected) {
      this.rectElement.classList.add('selected');
    } else {
      this.rectElement.classList.remove('selected');
    }
  }
}

export type Length = {
  x2: number;
  y2: number;
};

export class Line extends Shape {
  private position: Point = { x: 0, y: 0 };
  private length: Length = { x2: 0, y2: 0 };
  private lineElement: SVGLineElement;
  private dx = 0;
  private dy = 0;
  private dist = 0;

  private x2 = 0;
  private y2 = 0;

  constructor(
    svgContainer: SVGSVGElement,
    protected start: Point,
  ) {
    super(svgContainer, start);
    this.lineElement = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    svgContainer.appendChild(this.lineElement);
  }

  public override updatePosition(start: Point, end: Point): void {
    this.position = {
      x: start.x,
      y: start.y,
    };

    this.x2 = end.x;
    this.y2 = end.y;

    this.lineElement.setAttribute('x1', `${start.x}`);
    this.lineElement.setAttribute('y1', `${start.y}`);
    this.lineElement.setAttribute('x2', `${end.x}`);
    this.lineElement.setAttribute('y2', `${end.y}`);
  }

  public override set tempMode(isTemp: boolean) {
    if (isTemp) {
      this.lineElement.classList.add('temp');
    } else {
      this.lineElement.classList.remove('temp');
    }
  }
  public override set select(isSelected: boolean) {
    if (isSelected) {
      this.lineElement.classList.add('selected');
    } else {
      this.lineElement.classList.remove('selected');
    }
  }

 public override contains(p: Point): boolean {
  const x1 = this.position.x, y1 = this.position.y;
  const x2 = this.x2,         y2 = this.y2;

  const tol = 6;

  if (
    p.x < Math.min(x1, x2) - tol || p.x > Math.max(x1, x2) + tol ||
    p.y < Math.min(y1, y2) - tol || p.y > Math.max(y1, y2) + tol
  ) return false;

  const dist =
    Math.abs((y2 - y1) * p.x - (x2 - x1) * p.y + x2 * y1 - y2 * x1) /
    Math.hypot(x2 - x1, y2 - y1);

  return dist <= tol;
}




}

export class Triangle extends Shape {

  private triangleElement: SVGPolygonElement;
  private x3 = 0;
  private y3 = 0;
  private position: Point = { x: 0, y: 0 };

  constructor(
    svgContainer: SVGSVGElement,
    protected start: Point,
  ) {
    super(svgContainer, start);
    this.triangleElement = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    svgContainer.appendChild(this.triangleElement);
  }
public override updatePosition(start: Point, end: Point): void {
  const ax = start.x, ay = start.y;
  const cx = end.x,   cy = end.y;

  // Vektor A -> C
  const vx = cx - ax;
  const vy = cy - ay;

  const s = Math.hypot(vx, vy);
  if (s < 0.001) return;

  // Rotation um +60° (kann auch -60° sein)
  const cos60 = 0.5;
  const sin60 = Math.sqrt(3) / 2;

  // Kandidat B1 = rotate(v, +60)
  const b1x = ax + (vx * cos60 - vy * sin60);
  const b1y = ay + (vx * sin60 + vy * cos60);

  // Kandidat B2 = rotate(v, -60)
  const b2x = ax + (vx * cos60 + vy * sin60);
  const b2y = ay + (-vx * sin60 + vy * cos60);

  // Wähle die Variante, die "stabil nach unten" wirkt:
  // Wir nehmen den Kandidaten, der zusammen mit C die Basis eher unter A hält.
  // (Heuristik: größere durchschnittliche y-Koordinate der Basispunkte)
  const avgY1 = (b1y + cy) / 2;
  const avgY2 = (b2y + cy) / 2;

  const bx = avgY1 > avgY2 ? b1x : b2x;
  const by = avgY1 > avgY2 ? b1y : b2y;

  this.triangleElement.setAttribute(
    "points",
    `${ax},${ay} ${bx},${by} ${cx},${cy}`
  );
}






  public override set tempMode(isTemp: boolean) {
    if (isTemp) {
      this.triangleElement.classList.add('temp');
    } else {
      this.triangleElement.classList.remove('temp');
    }
  }
  public override set select(isSelected: boolean) {
    if (isSelected) {
      this.triangleElement.classList.add('selected');
    } else {
      this.triangleElement.classList.remove('selected');
    }
  }

  public override contains(p: Point): boolean {
  const svg = this.triangleElement.ownerSVGElement!;
  const pt = svg.createSVGPoint();

  pt.x = p.x;
  pt.y = p.y;

  return this.triangleElement.isPointInFill(pt);
}


  
}
