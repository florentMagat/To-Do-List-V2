import { useState } from "react";
import "./List.css";

export default function List(props) {
  
  return (
    <li className="tasks">
        <div className="task align-items-center">
            <div className="input-group-text">
              <input className="task-checkInput" type="checkbox" value="" aria-label="Checkbox for following text input"/>           
              <div className="task-description">{props.txt}</div>
            </div>
            <button 
              className="btn btn-warning"
              onClick={()=>props.updateFunction(props.id)}
              >
                Modifier
            </button>
            <button 
              className="btn btn-danger"
              onClick={()=>props.delFunction(props.id)}>
                Supprimer
            </button>
        </div>
    </li>
  )
}