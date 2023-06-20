import React, { useState } from "react";
import ReactDOM from "react-dom/client";
//Importamos Post.js
//import { Post } from './Post';
//Seleccionamos el DOM y lo guardamos en una constante
const root = ReactDOM.createRoot(document.getElementById("root"));
function Counter() {
  //Ponemos dentro del useState el valor inicial del counter
  const [counter, setCounter ] = useState(0)
  return(
    <div>
      <h1>Counter: { counter }</h1>
      <button onClick={() => {
        //Establecemos un contador 
        setCounter(counter + 1)
      }}>Sumar</button>
      <button onClick={() => {
        setCounter(counter - 1)
      }}>Restar</button>
      <button onClick={() => {
        setCounter(0)
      }}>Reiniciar</button>
    </div>
  )
}
function CounterInput() {
  const [ message, setMessage ] = useState('')
  return(
    <div>
      <input onChange={e => setMessage(e.target.value)}/>
      <button onClick={() => {
        alert("El mensaje es: "+message)
        }}>Save</button>
    </div>
  )
}
//Usamos Fragment para evitar los divs
root.render(
  <>
    <CounterInput />
  </>
);
