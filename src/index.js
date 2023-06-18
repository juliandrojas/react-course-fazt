import React from "react";
import ReactDOM from "react-dom/client";
//Importamos Component.js
import { Button } from './Button';
import { TaskCard } from './Task';
//Seleccionamos el DOM y lo guardamos en una constante
const root = ReactDOM.createRoot(document.getElementById("root"));
const handleChange = (e) => {console.log(e.target.value)}
//Usamos Fragment para evitar los divs
root.render(
  <>
   <TaskCard ready = {true} />
   <Button text="Saludar"/>
   <input id="hola" onDoubleClick={handleChange}/>
   <input id="mundo" onChange={handleChange}/>
   <form onSubmit={(e) => {
    //Evitamos que el formulario se recargue automáticamente con preventDefault y el evento
    e.preventDefault()
    alert("Enviado")}}>
    <h1>Registro de usuarios</h1>
      <button>Send</button>
   </form>
  </>
);
