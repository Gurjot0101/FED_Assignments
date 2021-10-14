import React from "react";
import Todo from "./TodoItem";

import styles from './styling/Todolist.module.css'


const TodoList = ({todos,deletetodo,edittodo,movedownhandler,moveuphandler}) => {
    
    if(todos === '')
    {
        return null;
    }
    else
    {
       return (
        <ul className={styles['items']}>
            {
                todos.map((todo,i) => {
                    return (<Todo
                        index = {i}
                        id={todo.id}
                        key = {i}
                        work={todo.work}
                        
                        deletetodo={deletetodo}
                        edittodo = {edittodo}
                        movedownhandler ={movedownhandler}
                        moveuphandler={moveuphandler}
                    />)
                })
            }
        </ul>
    ) 
    }
    
}

export default TodoList;