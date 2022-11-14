const num = [8,9,10,11,12,13,14,15,1,2,3,4,5,6,7];
const numB = [3,2,4,1];
const wrongNumber = [2,7,5,2,1];
const correctNumber = [4,5,6,1,2,3];
const asend = [2,3,4,5,1];

const orden = (array) => {
  for (const i of array) {
    if (array[i] < array[i+1]|| array[i] === array.lenght )   {
      return "giro " + array.indexOf(1) +" veces";
    } else {
      return -1;
    } 
  }
}
console.log(orden(wrongNumber));
console.log(orden(correctNumber));
console.log(orden(asend));



