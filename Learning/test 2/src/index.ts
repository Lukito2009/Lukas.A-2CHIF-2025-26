import { Game } from "./game";
const button1 = document.getElementById('lane1') as HTMLButtonElement;
const button2 = document.getElementById('lane2') as HTMLButtonElement;

const game = new Game()

button1.addEventListener('click', () => {
    game.addPlate(1);
})
button2.addEventListener('click', () => {
    game.addPlate(2);
})