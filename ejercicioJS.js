const num = [8,9,10,11,12,13,14,15,1,2,3,4,5,6,7];
const numB = [3,2,4,1];
const wrongNumber = [5,6,7,1,2,3,4];
const correctNumber = [4,5,6,1,2,3];
const asend = [3,4,5,1,2];

const orden = (array) => {
  let variable;

  for (const i of array.keys()) {
    if (i+1 === array.length) {
      console.log(1 < undefined)
      console.log(array[i])
      console.log(array.length)
    }
    if (array[i] < array[i+1]|| array[i] === array.lenght )   {
      variable = `giro ${array.indexOf(1)} veces`;
    } else {
      variable = -1;
    } 
  }

  return variable;
}

orden(numB);
//console.log(orden(wrongNumber));
//console.log(orden(numB));
//console.log(orden(correctNumber));
//console.log(orden(asend));
