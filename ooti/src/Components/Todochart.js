import "./Todochart.css";

export default function Todochart() {
  return (
    <div className="todochart">
        <h2 className="todochart-title">Nombre de tâches de la Todo List :</h2>
        <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar bg-success" style={{width: "25%"}}>réalisées</div>
        </div>
        <div className="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
            <div className="progress-bar bg-warning text-dark" style={{width: "75%"}}>à faire</div>
        </div>
    </div>
  )
}