let empty= '                 ola                        ke                                                                                                                           ase';
let space = "      ";
let have = "Do We have A Hashtag";
let test = "test";
let codewars = "codewars Is Nice";
let moreThan140 = "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat";
let repeat139 = "a".repeat(139);
let repeat140 = "a".repeat(140);

const hashtag ="#"
function mayuscula (variable){
    //.split rompe el array dependiendo de donde se tenga la condicion .filter saca alv los espacios  .map
    let spacesAndCapitalLetter = variable.split(' ')
                                         .filter((deleteSpaces) => deleteSpaces != '')
                                         .map(capitalLetter => capitalLetter[0].toUpperCase() + capitalLetter.slice(1));
    let variableSinEspacio = variable.split(" ").join("");
    if (variableSinEspacio === "" || variableSinEspacio.length >= 140) {
        return false;
    }   else { 
        return variableSinEspacio = hashtag + variableSinEspacio.charAt(0).toUpperCase() + variableSinEspacio.slice(1);
        }
}  
console.log(mayuscula(empty));
console.log(mayuscula(space));
console.log(mayuscula(have));
console.log(mayuscula(test));
console.log(mayuscula(codewars));
console.log(mayuscula(moreThan140));
console.log(mayuscula(repeat139));
console.log(mayuscula(repeat140));


let variable = 'estoy convirtiendome en mayusculas  tambien si  hay 2 espacios    o mas';
let palabras = variable.split(' ')
                       .filter((deleteSpaces) => deleteSpaces != '')
                       .map(capitalLetter => capitalLetter[0].toUpperCase() + capitalLetter.slice(1))
                       .toString();
                       

console.log(palabras);










