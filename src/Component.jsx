export function Component() {
  return (
    <div>
      <h1>Soy un componente importado</h1>
    </div>
  );
}
export function UserCard({ name, amount, married, address, greet }) {
  //console.log(name, amount, married, address, greet);
  return (
    <div>
      <h1>{name}</h1>
      <p>${amount}</p>
      <p>{married ? "Married" : "Single"}</p>
      <ul>
        <li>City: {address.city}</li>
        <li>Address: {address.street}</li>
      </ul>
    </div>
  );
}