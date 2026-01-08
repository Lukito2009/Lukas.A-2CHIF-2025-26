export abstract class Animal {
  protected x: number;
  protected y: number;
  protected noise: string;
  protected element: HTMLDivElement;

  constructor(x = 0, y = 0, noise: string) {
    this.x = x;
    this.y = y;
    this.noise = noise;

    this.element = document.createElement('div');
    this.element.className = 'animal';
    this.element.textContent = this.noise;

    document.getElementById('speak')!.appendChild(this.element);
  } 
}

export class Dog extends Animal {
  constructor() {
    super(0, 0, 'WauWau');
  }
}

export class Cat extends Animal {
  constructor() {
    super(0, 0, 'Miau');
  }
}
