import React,{useState} from "react";
import Inputbar from "./Input-bar";
import TodoList from "./TodoList";

import { v4 as uuidv4 } from 'uuid';

import styles from "./styling/TodoAPP.module.css";


const TodoAPP = () => {

    const [todos,settodos] = useState('');

    //---Add Todo object
    const addTodo = (Input) => {
        settodos((prevState) => {
            return [{
                id: uuidv4(),
                work: Input
            },
            ...prevState];
        })
    }

    //---Delete todo
    const deletetodo = (id) => {
        settodos((prevState) => {
            return prevState.filter((todo) => todo.id !== id)
        })
    }

    //---edit todo
    const edittodo = (id,newvalue) => {
        settodos((prevState) => {
            return prevState.map((todo) => {
                return id === todo.id ? {...todo, work: newvalue } : todo;
            })
        })
    }

    //---move down
    const movedownhandler=(i)=>{
        if(i===todos.length-1){
            alert('TASK Already at bottom!');
        }
        else
        {
            settodos((prevState) => {
                const data = [...prevState];
                const temp = data[i];
                data[i] = data[i+1];
                data[i+1] = temp;
                const newtodo = data;
                return newtodo;
            });
        }
    }

    //---move up
    const moveuphandler=(i) => {
        if(i===0){
            alert('TASK Already at top!');
        }
        else
        {
            settodos((prevState) => {
                const data = [...prevState];
                const temp = data[i-1];
                data[i-1] = data[i];
                data[i] = temp;
                const newtodo = data;
                return newtodo;
            })
        }
    }

    return (
        <div className={styles["app"]}>
            
            <div><label>YOUR TODO-LIST</label></div>  

            <Inputbar
                addTodo = {addTodo}
            />
            
            <TodoList
                todos = {todos}
                deletetodo = {deletetodo}
                edittodo = {edittodo}
                movedownhandler = {movedownhandler}
                moveuphandler={moveuphandler}
            />
        </div>
    )
}

export default TodoAPP;