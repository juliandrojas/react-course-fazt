import React from "react";
import ReactDOM from "react-dom/client";
//Importamos Component.js
import { Button } from './Button';
import { TaskCard } from './Task';
import { Saludar } from './Saludar';
//Seleccionamos el DOM y lo guardamos en una constante
const root = ReactDOM.createRoot(document.getElementById("root"));
//Usamos Fragment para evitar los divs
root.render(
  <>
   <TaskCard ready = {true} />
   <Saludar />
  </>
);
