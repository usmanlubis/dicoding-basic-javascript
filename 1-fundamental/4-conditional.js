let a = 20;

// if conditional
if (a == 20){
  console.log('a = 20');
}

// el else conditional
if (a < 20){
  console.log('a < 20');
} else {
  console.log('a = 20');
}

// else if conditional
if (a > 20) {
  console.log('a is greater than 20');
} else if (a == 20){
  console.log('a = 20');
} else {
  console.log('a is less than 20');
}

// switch conditional
let day = 7;

switch(day){
  case 1:
    console.log('sunday');
    break;
  case 2:
    console.log('monday');
    break;
  case 3:
    console.log('tuesday');
    break;
  case 4:
      console.log('wednesday');
      break;
  case 5:
      console.log('thursday');
      break;
  case 6:
      console.log('friday');
      break;
  case 7:
    console.log('saturday');
    break;
  default:
    console.log('you can only input number between 1-7')
}
