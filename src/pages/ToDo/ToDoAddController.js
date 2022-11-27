import { useState } from "react";

export function ToDoAddController(props) {

    /** Keep state here */
    const [toDoInput, setToDOINputText] = useState();

    const onToDoInputChange = (e) => {
        setToDOINputText(e.target.value);
    }

    const clickedaOnAddBtn = () => {
        props.addToDoItemAction(toDoInput);
        setToDOINputText("");
    }

    return(
        <>
            <input type='text' placeholder="Add your todo item." onChange={onToDoInputChange} value={toDoInput}/> 
            <button type='button' onClick={clickedaOnAddBtn}>+</button> 
        </>
    );
}