import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

import List from './List';
import Todochart from '../Todochart';
import "./Form.css";

export default function Form() {

    const [dataArr, setDataArr] = useState([
        {txt: "test 1", id: uuidv4(), done: true},
        {txt: "test 2", id: uuidv4(), done: false},
        {txt: "test 3", id: uuidv4(), done: false},
    ])

    let checked = 0;
    let unchecked=0;

    for (let element of dataArr){
        if (element.done === true){
            checked = checked + 1;
        } else {
            unchecked = unchecked + 1;        
        }
    }

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

    const length = dataArr.length

    return (
        <div className='main'>
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
                    {dataArr.map(item => {
                        return (
                            <List
                                txt={item.txt}
                                key={item.id}
                                id={item.id}
                                done={item.done}
                                updateFunction={updateTask}
                                delFunction={deleteTask} 
                            />
                        )
                    })}
                </ul>
            </div>
            <div>
                <Todochart 
                    length={length}
                    checked={checked}
                    unchecked={unchecked}
                />       
            </div>
        </div>
    )
}