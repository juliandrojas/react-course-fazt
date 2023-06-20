import React from "react";
import ReactDOM from "react-dom/client";
//Importamos Post.js
import { Post } from './Post';
//Seleccionamos el DOM y lo guardamos en una constante
const root = ReactDOM.createRoot(document.getElementById("root"));
//Arreglo de usuarios
const users = [
  {
    id: 1, 
    name: 'Ryan Ray',
    image: 'https://robohash.org/user1'
  },
  {
    id: 2, 
    name: 'Joe',
    image: 'https://robohash.org/user2'
  },
  {
    id: 3, 
    name: 'Marcos',
    image: 'https://robohash.org/user3'
  }
]

//Usamos Fragment para evitar los divs
root.render(
  <>
    {users.map((user, i) => {
      return (
        <div key={i}>
          <h1> {user.name} </h1>
          <img src={user.image}/>
        </div>
      );
    })}
  </>
);
