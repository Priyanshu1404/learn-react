import { useState } from "react"
import { ToDoAddController } from "./ToDoAddController"
import { ToDoList } from "./ToDoList"

export function ToDoContainer(){

    //const [toDoListState, changeToDoList] = useState()

    const [toDoListState, changeToDoList] = useState([])

    const addToDoItem = (toDoValue) => {
        let newListItems = toDoListState.slice();
        newListItems.push(toDoValue);
        console.log(newListItems);
        changeToDoList(newListItems)
    }

    return(
        <div className="App">
            <h3>Todo app</h3>
            <ToDoAddController addToDoItemAction={addToDoItem}/>
            <br/>
            <ToDoList toDoList={toDoListState}/>
        </div>
    )

}