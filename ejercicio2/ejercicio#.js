// rules #inicial
//        que le cambie a mayusculas la primera letra
//        que sea false si tiene mas de 140 chars
//         si esta vacio return false


let word = "pepe"
const hashtag ="#"

function mayuscula (variable) {
    return word = hashtag + word.charAt(0).toUpperCase() + word.slice(1)
}
console.log(mayuscula(word));

