// TODO 3
import Tiger from './Tiger.js';
import Wolf from './Wolf.js';
// TODO 3 end

const fight = (tiger, wolf) => {
  if (tiger.strength > wolf.strength) {
    return tiger.growl();
  }
  if (wolf.strength > tiger.strength) {
    return wolf.howl();
  }
  return 'Harimau dan serigala sama-sama kuat!';
};

const myTiger = new Tiger();
const myWolf = new Wolf();

const result = fight(myTiger, myWolf);
console.log(myTiger);
console.log(myWolf);
console.log(result);
// TODO 4
export {fight, myTiger, myWolf, result};
// TODO 4 end