import React from "react";
import styles from './styling/todoitem.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash,faEdit,faAngleDoubleDown,faAngleDoubleUp} from '@fortawesome/free-solid-svg-icons'

const Todo = (props) => {

    function deletehandler() {
        props.deletetodo(props.id);
    }

    function edithandler() {

        const newvalue = prompt('Edit TO-DO item')
        if(newvalue === "" || newvalue === null)
        {
            return null;
        }
        else
        {
            props.edittodo(props.id,newvalue); 
        }
    }

    function movedownhandler(){
        props.movedownhandler(props.index);
    }

    function moveuphandler(){
        props.moveuphandler(props.index);
    }

    return (
        <li className={styles['list']}>
                <div>{props.work}</div>
                <div>  
                    <span onClick={edithandler} className="edit"><FontAwesomeIcon icon={faEdit} /></span>
                    <span onClick={deletehandler} className="delete"><FontAwesomeIcon icon={faTrash} /></span>
                    <span onClick={moveuphandler} className="up"><FontAwesomeIcon icon={faAngleDoubleUp} /></span>
                    <span onClick={movedownhandler} className="down"><FontAwesomeIcon icon={faAngleDoubleDown} /></span>
                </div>           
        </li>
    )
}

export default Todo;