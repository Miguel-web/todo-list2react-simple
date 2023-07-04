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
    return (
        <div className="Container text-center vh-100  d-flex align-items-center gap-3 flex-column">
        <h1>Todo List</h1>
            <input className="text-dark" type="text" id="task" value={task} onKeyDown={addTask} onChange={handleTask} placeholder=' What needs to be done?'/>  
            <div>
                <ul>
                {
                    listTask.map((task, index) => {
                        return (
                        <li key={index}> {task} </li>
                        )
                    })
                }
                </ul>
            </div>
            <div className='card m-1'>{listTask.length} pending items</div>    
        </div>
        
  );
};

export default TodoList;
