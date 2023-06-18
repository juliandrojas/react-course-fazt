export const Post = () => {
    return <button onClick={() => {
        //Pedimos los datos a la API
        fetch('https://jsonplaceholder.typicode.xyz/posts')
            //Convertimos los datos a JSON
            .then(response => response.json())
            //Los mostramos por consola
            .then(data => console.log(data))
            //Si ocurre un error (la URL no existe)
            .catch(error => console.error(error))
    }}>
        Traer datos
    </button>
}
