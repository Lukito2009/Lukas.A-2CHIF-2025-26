export class Game {
  private stack = [[4, 3, 2, 1], [], []];
  private svg = document.getElementById('svg') as unknown as SVGSVGElement;
  private bar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

  private move = { start: -1, end:-1}

  constructor() {
    this.svg.setAttribute('viewBox', '0 0 400 350');
    this.svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');

    this.bar.setAttribute('fill', 'brown');
    this.bar.setAttribute('x', '5');
    this.bar.setAttribute('y', '300');
    this.bar.setAttribute('width', '390');
    this.bar.setAttribute('height', '30');
    this.svg.appendChild(this.bar);

    for (let i = 0; i < 3; i++) {
      const stab = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      stab.setAttribute('fill', 'grey');
      stab.setAttribute('x', String(100 + i * 100));
      stab.setAttribute('y', '160');
      stab.setAttribute('width', '15');
      stab.setAttribute('height', '140');
      this.svg.appendChild(stab);
    }

    for (let i = 0; i < 4; i++) {
      const disks = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      const color = ['#6366F1', '#06B6D4', '#22C55E', '#EAB308'];
      const diskWidth = 80 - i * 15;
      disks.setAttribute('fill', `${color[i]}`);
      disks.setAttribute('x', String(107.5 - diskWidth / 2));
      disks.setAttribute('y', String(280 - i * 20));
      disks.setAttribute('width', String(diskWidth));
      disks.setAttribute('height', '20');
      disks.setAttribute('rx', '8');
      disks.setAttribute('ry', '8');
      this.svg.appendChild(disks);
    }
  }
  public acceptInput(button: number){
    console.log(button)

    if(this.move.start === -1){
      this.move.start = button;
    } else if(this.move.end === -1){
      this.move.end === button

      
    }
    
  }
}
