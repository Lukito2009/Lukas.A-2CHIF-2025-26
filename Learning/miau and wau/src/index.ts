import 'styles.css';
import { Dog, Cat } from './animals';

document.getElementById('Dog')!.addEventListener('click', () => {
  new Dog();
});

document.getElementById('Cat')!.addEventListener('click', () => {
  new Cat();
});