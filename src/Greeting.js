/*export default function Greeting(props) {
    return <h1>{ props.title }</h1>
}*/
export default function Greeting({ title, name = "User" }) {
    return <h1> { title } dice: { name }</h1>
}
