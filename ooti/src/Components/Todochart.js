import "./Todochart.css";

export default function Todochart(props) {

  const checkedPercent = `${props.checked/props.length*100}%`;
  const uncheckedPercent = `${props.unchecked/props.length*100}%`;

  return (
    <div className="todochart">
        <h2 className="todochart-title">Nombre de tâches de la Todo List : {props.length}</h2>
        <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow={checkedPercent} aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar bg-success" style={{width: checkedPercent}}>réalisées ({props.checked})</div>
        </div>
        <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow={uncheckedPercent} aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar bg-warning text-dark" style={{width: uncheckedPercent}}>à faire ({props.unchecked})</div>
        </div>
    </div>
  )
}