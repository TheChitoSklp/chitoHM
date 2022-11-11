let empty= '                 ola                        ke                                                                                                                           ase';
let space = "      ";
let have = "Do we have A Hashtag";
let test = "test";
let codewars = "codewars Is Nice";
let moreThan140 = "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat";
let repeat139 = "a".repeat(139);
let repeat140 = "a".repeat(140);


function mayuscula (variable){
    //.split rompe el array dependiendo de donde se tenga la condicion .filter saca alv los espacios  .map
    let spacesAndCapitalLetter = variable.split(' ')
                                         .filter((deleteSpaces) => deleteSpaces != '')
                                         .map(capitalLetter => capitalLetter[0].toUpperCase() + capitalLetter.slice(1))
                                         .join('');
  
        if (spacesAndCapitalLetter === "" || spacesAndCapitalLetter.length >= 140) {
        return false;
    }   else { 
        return spacesAndCapitalLetter = '#' + spacesAndCapitalLetter;
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











