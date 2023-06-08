import { useState } from "react";
import "./List.css";

export default function List(props) {
  
  return (
    <li className="tasks">
        <div className="task align-items-center">
            {/* bouton check de ma tâche */}
            <div className="input-group-text">
              <input className="task-checkInput" type="checkbox" value="" aria-label="Checkbox for following text input"/>           
              <div className="task-description">{props.txt}</div>
            </div>
            {/* bouton de modifiaction de ma tâche */}
            <button 
              className="btn btn-warning"
              onClick={()=>props.updateFunction(props.id)}
              >
                Modifier
            </button>
            {/* bouton de suppression de ma tâche */}
            <button 
              className="btn btn-danger"
              onClick={()=>props.delFunction(props.id)}>
                Supprimer
            </button>
        </div>
    </li>
  )
}