import Character from "./Classes/Character.js";
import Liquid from "./Classes/Liquid.js";
import Berry from "./Classes/Berry.js";
import Mixture from "./Classes/Mixture.js";

const water = new Liquid('Вода', 2);
const raspberry = new Berry('Малина', 3, 5, 3, 2);
const mixture = new Mixture('Малиновый компот', water, raspberry);
console.log(mixture);

// const person = new Character('Ironman', 10, 5, 100);
// console.log(person.showInfo());

// person.drinkMixture(mixture);
// console.log(person.showInfo());