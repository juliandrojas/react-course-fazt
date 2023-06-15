import React from "react";
import ReactDOM from "react-dom/client";
//Importamos Component.js
//import { Component, UserCard } from './Component';
//import Product, { Navbar } from './Product';
//import Greeting from "./Greeting";
import { UserCard } from "./Component";
//Seleccionamos el DOM y lo guardamos en una constante
const root = ReactDOM.createRoot(document.getElementById("root"));
/*
//Crear componentes a partir de funciones
function Greeting() {
  //Para interpretar código JS dentro de HTML se usan las llaves
  const name = "fazt";
  return <h1>{name}</h1>;
}*/
function IsMarried() {
  const married = false;
  /*if(married) {
        return <h1>Estoy casado</h1>
    } else {
        return <h1>No estoy casado</h1>
    }*/
  //Condicional con operador ternario
  return <h1>{married ? "Estoy casado 😀" : "No estoy casado 🤐"}</h1>;
}
function Objects() {
  const user = {
    firstName: "Ryan",
    lastname: "Ray",
  };
  //Convertimos a String el objeto user usando JSON.stringify()
  return (
    <div>
      {/* <h1>{JSON.stringify(user)}</h1> */}
      <h1>{user.firstName}</h1>
      <h3>{user.lastname}</h3>
    </div>
  );
}
function IsMarriedString() {
  const married = true;
  return (
    //Para convertir de booleano a String, usamos el método toString
    <div>
      <h1>{married.toString()}</h1>
    </div>
  );
}
//Función adentro de una función
function PrimeraFuncion() {
  function sumar(x, y) {
    return x + y;
  }
  return <h1>{sumar(10, 30)}</h1>;
}
//Función importada

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
    <UserCard
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
    />
  </>
);
