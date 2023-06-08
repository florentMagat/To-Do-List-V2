import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';

import List from './List';
import Todochart from '../Todochart';
import "./Form.css";

export default function Form() {

    const [stateInput, setStateInput] = useState();

    const [dataArr, setDataArr] = useState([
        {txt: "test 1", id: uuidv4(), done: true},
        {txt: "test 2", id: uuidv4(), done: false},
        {txt: "test 3", id: uuidv4(), done: false},
    ])

    //boucle for pour dénombrer les tâches effectuées et non effectuées
    let checked = 0;
    let unchecked=0;

    for (let element of dataArr){
        if (element.done === true){
            checked = checked + 1;
        } else {
            unchecked = unchecked + 1;        
        }
    }

    //suppression d'une tâche en fonction de son id, return d'un nouveau tableau filtré de l'élément supprimé
    const deleteTask = id => {
        const filteredState = dataArr.filter(item => {
            return item.id !== id;
        })
        setDataArr(filteredState)
    }

    //mise à jour de ma tâche
    const updateTask = id => {
        console.log(id);
    }

    //création d'une nouvelle tâche, je push celle-ci dans un nouveau tableau puis je mets à jour le state 
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
                        //input de mon ajout de tâches, la fonction linkedInput se charge de mettre à jour le state
                        className="todolist-form-text" 
                        onInput={e => linkedInput(e.target.value)}
                        value={stateInput}
                        type="text" 
                        id="todo" 
                        //le champ est requis et ne peut donc pas être laissé vide lors de la création d'une nouvelle tâche
                        required
                    />
                    <button className="todolist-form-button btn btn-primary">Ajouter une tâche</button>
                </form>
                <ul>
                    {dataArr.map(item => {
                        return (
                            // transmission des éléments nécessaires à mon composant List
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
                {/* transmission des éléments nécessaires à mon composant List */}
                <Todochart 
                    length={length}
                    checked={checked}
                    unchecked={unchecked}
                />       
            </div>
        </div>
    )
}