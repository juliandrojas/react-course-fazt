import './task.css';
export function TaskCard({ ready }) {
  /*const cardStyles = { background: "#202020", color: "#fff", padding: "20px" };
  const titleStyle = { fontWeight: "lighter" }*/
  return (
    <div className="card">
      <h1>Mi primera tarea</h1>
      <span className={ready ? 'bg-green' : 'bg-red'}>{ready ? 'Tarea realizada' : 'Tarea Pendiente'}</span>
    </div>
  );
}
