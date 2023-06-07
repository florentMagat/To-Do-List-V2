import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

import List from './List';
import "./Form.css";

export default function Form() {

    const [dataArr, setDataArr] = useState([
        {txt: "kfhmdlgkfjclmgdgjkdfù", id: uuidv4()},
        {txt: "hgzjkghwghqsudljg", id: uuidv4()},
        {txt: "lkghsjklsghhms", id: uuidv4()},
    ])

    const deleteTask = id => {
        const filteredState = dataArr.filter(item => {
            return item.id !== id;
        })
        setDataArr(filteredState)
    }

    return (
        <div className='main row align-items-center'>
            <form className='main-form'>
                <label htmlFor='todo'>
                </label>
                <input className="main-form-text" type="text" id="todo" />
                <button className="main-form-button btn btn-primary">Ajouter une tâche</button>
            </form>
            <ul>
                {dataArr.map(item => {
                    return (
                        <List 
                            txt={item.txt}
                            key={item.id}
                            id={item.id}
                            delFunction={deleteTask} 
                        />
                    )
                })}
            </ul>
        </div>
    )

}