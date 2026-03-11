import '../styles.css';

import { Game } from './game';
import { Selection } from './selection';

const game = new Game();


const button1 = document.getElementById('1') as HTMLButtonElement
    const button2 = document.getElementById('2') as HTMLButtonElement
    const button3 = document.getElementById('3') as HTMLButtonElement

    button1.addEventListener('click', () => {
        game.acceptInput(0)
    })
    button2.addEventListener('click', () => {
        game.acceptInput(1)
       
    })
    button3.addEventListener('click', () => {
        game.acceptInput(2)
        
    })
