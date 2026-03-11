import { Game } from "./game";

const buttton1 = document.getElementById('1') as HTMLButtonElement;
const buttton2 = document.getElementById('2') as HTMLButtonElement;

const game = new Game()

buttton1.addEventListener('click', () => {
    game.addPlate(0)

})
buttton2.addEventListener('click', () => {
    game.addPlate(1)

})
