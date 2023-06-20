import { VscGlobe } from 'react-icons/vsc';
export const Post = () => {
    return <button onClick={() => {
        //Pedimos los datos a la API
        fetch('https://jsonplaceholder.typicode.com/posts')
            //Convertimos los datos a JSON
            .then(response => response.json())
            //Los mostramos por consola
            .then(data => console.log(data))
            //Si ocurre un error (la URL no existe)
            .catch(error => console.error(error))
    }}>
        <VscGlobe />
        Traer datos
    </button>
}
