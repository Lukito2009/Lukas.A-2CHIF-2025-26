import { PlateGame } from "./game";

const add = document.getElementById("add") as HTMLButtonElement;
const remove = document.getElementById("remove") as HTMLButtonElement;

const game = new PlateGame();

add.addEventListener('click', () => {
  game.addPlate();
});

remove.addEventListener('click', () => {
  game.removePlate();
});