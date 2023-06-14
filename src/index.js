import React from 'react';
import ReactDOM from 'react-dom/client';
//Seleccionamos el DOM y lo guardamos en una constante
const root = ReactDOM.createRoot(document.getElementById('root'));
//Crear componentes a partir de funciones
function Greeting () {
    return <div>
        <h1>Esto es un componente</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
    </div>
}
root.render(<div>
    <Greeting />
</div>)

