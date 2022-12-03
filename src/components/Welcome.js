import { useState, useEffect } from "react";

export default function CounterWithUseState(props) {
  const [counter, setCounter] = useState(0);
  const [semaforo, setSemaforo] = useState(false);
  const { name } = props;

  useEffect(() => {
    console.log(`el semaforo cambio ${semaforo}`);
  }, [semaforo]);

  const contar = () => {
    setCounter(counter + 5);
    setSemaforo(!semaforo);
  };
  return (
    <div>
      <h1>hola {name}</h1>
      <h2>Contador de react con useState</h2>
      <h4>El numeo del contador es {counter} </h4>
      <p>El color del semaforo es {semaforo ? "green" : "red"}</p>
      <button type="submit" onClick={contar}>
        {" "}
        Sumar contador
      </button>
    </div>
  );
}
