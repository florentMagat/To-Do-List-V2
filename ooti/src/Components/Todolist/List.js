import { useState } from "react";
import "./List.css";

export default function List(props) {

  const [ischecked, setChecked] = useState(false);
  
  return (
    <li className="tasks">
        <div className="task align-items-center">
            {/* bouton check de ma tâche, la classe évolue en fonction de l'état de celui-ci (coché ou non) */}
            <div className={ischecked ? "input-group-text checked" : "input-group-text"}>
              <input 
                className="task-checkInput" 
                type="checkbox" 
                ischecked={ischecked}
                onChange={() => setChecked((prev) => !prev)}
                aria-label="Checkbox for following text input"
                {...props}
              />           
              <div>
                {props.txt}
              </div>
            </div>
            {/* bouton de modification de ma tâche */}
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