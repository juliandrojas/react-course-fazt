import React from "react";
import ReactDOM from "react-dom/client";
//Importamos Component.js
import { Button } from './Button';
//Seleccionamos el DOM y lo guardamos en una constante
const root = ReactDOM.createRoot(document.getElementById("root"));
//Usamos Fragment para evitar los divs
root.render(
  <>
    {/* <Greeting title="Hola Mundo" name="Joe" />
    <Greeting title="Hola React" name="Ryan" />
    <Greeting title="Hola JSX" />
    <Greeting title="Hola JavaScript" />
    <Greeting title="Hola Fazt" /> */}
    {/* <Greeting x = "bye"/>
    <Greeting y = {30}/>
    <Greeting z = {true} />
    <Greeting a = {[1, 2, 3]} /> */}
    <Button text = "Click me"/>
    <Button text = "Pay"/>
    <Button text =  "Save" name="Joe" />
    {/* <UserCard
      name="Ryan Ray"
      amount={3000}
      married={true}
      points={[99, 33.3, 22.2]}
      address={{ street: "123 Main Street", city: "New York" }}
      greet = {function(){ alert("Hello") }}
    />
    <UserCard
      name="Joe McMillan"
      amount={1000}
      married={false}
      points={[100, 20]}
      address={{ street: "Avenue Some 123", city: "New York" }} 
    /> */}
  </>
);
