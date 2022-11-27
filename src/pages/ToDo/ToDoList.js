
export function ToDoList(props) {

    const renderToDoList = () => {
        const res = props.toDoList.map((x, i) => {
            console.log("index", i)
            return <p key={x}> {x} </p>
        })

        return res;
    }

    return (
        <>
            {renderToDoList()}
            
        </>
    );
}