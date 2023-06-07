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

    const [stateInput, setStateInput] = useState();

    const deleteTask = id => {
        const filteredState = dataArr.filter(item => {
            return item.id !== id;
        })
        setDataArr(filteredState)
    }

    const updateTask = id => {
        console.log(id);
    }

    const addTodo = e =>{
        e.preventDefault();
        const newArr = [...dataArr];
        const newTodo = {};
        newTodo.txt = stateInput;
        newTodo.id = uuidv4();

        newArr.push(newTodo);
        setDataArr(newArr);
        setStateInput('');
    }

    const linkedInput = e => {
        setStateInput(e);
    }

    return (
        <div className='todolist'>
            <form onSubmit={e => addTodo(e)} className='todolist-form'>
                <label htmlFor='todo'>
                </label>
                <input 
                    className="todolist-form-text" 
                    onInput={e => linkedInput(e.target.value)}
                    value={stateInput}
                    type="text" 
                    id="todo" 
                    required
                />
                <button className="todolist-form-button btn btn-primary">Ajouter une tâche</button>
            </form>
            <ul>
                {dataArr.map((item, setDataArr) => {
                    return (
                        <List 
                            txt={item.txt}
                            key={item.id}
                            id={item.id}
                            updateFunction={updateTask}
                            delFunction={deleteTask} 
                            dataArr={setDataArr}
                        />
                    )
                })}
            </ul>
        </div>
    )
}