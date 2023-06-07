import "./List.css";

export default function List(props) {
  return (
    <li className="tasks">
    {/* //   <div class="input-group mb-3">

    //     <input type="text" class="form-control" aria-label="Text input with checkbox"/>
    //   </div> */}

        <div className="task align-items-center">
            <div class="input-group-text">
              <input class="task-checkInput" type="checkbox" value="" aria-label="Checkbox for following text input"/>           
              <div className="task-description">{props.txt}</div>
            </div>
            <button 
              className="btn btn-danger"
              onClick={()=>props.delFunction(props.id)}
              >
                Supprimer
            </button>
        </div>
    </li>
  )
}