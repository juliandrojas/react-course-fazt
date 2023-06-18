import React from "react";
import ReactDOM from "react-dom/client";
//Importamos Post.js
import { Post } from './Post';
//Seleccionamos el DOM y lo guardamos en una constante
const root = ReactDOM.createRoot(document.getElementById("root"));
//Usamos Fragment para evitar los divs
root.render(
  <>
    <Post />
  </>
);
