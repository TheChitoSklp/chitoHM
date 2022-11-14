const num = [8,9,10,11,12,13,14,15,1,2,3,4,5,6,7];
const numB = [3,2,4,1]
let orden = (array) => {
   let lugar = 0;
   const array_lenght = array.length;

   for (let i = 0; i < array_lenght; i++) {

   if (array[i+1] >= array[i])  {

         return lugar = "giro " +array.indexOf(1) +" veces";

      } else {
         return -1;
      }
   }
   
}
console.log(orden(num));
console.log(orden(numB));