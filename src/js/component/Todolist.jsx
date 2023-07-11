import React, {useState} from 'react'

const TodoList = () => {
    const [task, setTask] = useState("");
    const [listTask, setListTask] = useState([]);
    const handleTask = (event) => {
        setTask(event.target.value); 
    } 
    const addTask = (event) => {
        if (event.key == "Enter") {
            setListTask([...listTask, task]);
            setTask("");
        }
    }
    const handlerButtomDelete = (indexid) => setListTask(listTask.filter((task, index)=> (indexid != index)))

    return (
        <div className="Container text-center vh-100  d-flex align-items-center gap-3 flex-column">
        <h1>Todo List</h1>
            <input className="text-dark" type="text" id="task" value={task} onKeyDown={addTask} onChange={handleTask} placeholder=' What needs to be done?'/>  
            <div>
                <ul>
                {
                    listTask.map((task, index) => {
                        return (
                        <li key={index}> {task} <button type='button' className='btn-close btn-danger' onClick={(event) => handlerButtomDelete(index)}></button> </li>
                        )
                    })
                }
                </ul>
            </div>
            <div className='card m-1'>{listTask.length === 0
              ? "No tasks, Hola Jose..."
              : listTask.length + " Item Left"}</div>    
        </div>
        
  );
};

export default TodoList;

