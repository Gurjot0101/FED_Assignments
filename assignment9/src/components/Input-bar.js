import React,{useState} from "react";
import styles from './styling/inputbar.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'

const Inputbar = (props) => {

    const [Input,setInput] = useState('');

    function inputhandler(e) {
        setInput(e.target.value);
    }

    function formSubmitHandler(e) {
        e.preventDefault();
        setInput("");
        props.addTodo(Input);
    }

    return (

        //----Input bar
        <form onSubmit={formSubmitHandler} className={styles['todoinput']} >
            <input
                type="text" 
                placeholder="ENTER TO-DO Item" 
                onChange={inputhandler}
                value={Input}
                required
            />
            <button type="submit"><FontAwesomeIcon icon={faPlus} /></button>
        </form>

    )
}

export default Inputbar;