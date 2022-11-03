const num = [8,9,10,11,12,13,14,15,1,2,3,4,5,6,7];
const numB = [3,2,4,1]
const wrongNumber = [2,3,5,4,1]
const correctNumber = [4,1,2,3]

const orden = (array) => {
  for (let i = 0; i < array.lenght; i++) {
    if (array[i+1] >= array[i])  {
      return "giro " +array.indexOf(1) +" veces";
    } else {
      return -1;
    }
  }
}

//console.log(orden(num));
//console.log(orden(numB));
console.log(orden(correctNumber));
console.log(orden(wrongNumber));
