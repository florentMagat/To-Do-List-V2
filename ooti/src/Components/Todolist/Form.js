import {useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import axios from 'axios';

import List from './List';
import Todochart from '../Todochart';
import "./Form.css";

export default function Form() {

    const [stateInput, setStateInput] = useState();
    const token = localStorage.getItem('token');
    console.log(token)

    const [dataArr, setDataArr] = useState([
        {txt: "test 1", id: uuidv4(), done: true},
        {txt: "test 2", id: uuidv4(), done: false},
        {txt: "test 3", id: uuidv4(), done: false},
        {txt: "test 4", id: uuidv4(), done: true},
    ]);

    //je récupère le token d'authentification qui va être stocké en local
    useState(function(){
    const fetchData = async () =>{

        axios.post('https://app.ooti.co/api/v1/token-auth/', {
            // username: process.env.USERNAME,
            // password: process.env.PASSWORD,
            username: "florentmagat@yahoo.com",
            password: "n@qCtEAA3j4cAFm",
          })
          .then((response) => {
            localStorage.setItem('token', JSON.stringify(response));
          });
      };
      fetchData();
    });


    // useEffect(function(){
    //     const fetchData = async () =>{
    
    //         axios.get('https://app.ooti.co/api/v1/organizations/membership/', 
    //         { Authorization: token })
    //           .then((tasksData) => {
    //             console.log(tasksData);
    //           });
    //       };
    //       fetchData();
    //     });



    //boucle for pour dénombrer les tâches effectuées et non effectuées
    let checked = 0;
    let unchecked = 0;

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

    //mise à jour de la description de ma tâche  


        const updateTask= id => {
            let newTxt = prompt("Vous pouvez renommer cette tâche");
            let num = dataArr.findIndex(element => element.id === id);
            
            console.log(id)
            console.log(num)    
            let newDataArr = [...dataArr];
            let item = {...newDataArr[num]};
            item.txt = newTxt;
            newDataArr[num] = item;
            console.log(newDataArr);
        };

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
                {/* transmission des éléments nécessaires à mon composant Todochart*/}
                <Todochart 
                    length={length}
                    checked={checked}
                    unchecked={unchecked}
                    />       
            </div>
        </div>
    )
}