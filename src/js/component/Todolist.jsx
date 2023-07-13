import React, {useState} from 'react'
// https://assets.breatheco.de/apis/fake/todos/user/miguelgilweb

const TodoList = () => {
    const [task, setTask] = useState("");
    const [listTask, setListTask] = useState([]);
    const handleTask = (event) => {
        setTask(event.target.value); 
    } 
    const addTask = (event) => {
        if (event.key == 'Enter' && task.trim() !== '') {
            setListTask([...listTask, task]);
            setTask();
        }
    }
    const handlerButtomDelete = (indexid) => setListTask(listTask.filter((task, index)=> (indexid != index)))

    return (
        <div className="text-center text-white d-flex align-items-center gap-3 flex-column">
        <h1>Todo List</h1>
            <input className="text-dark" type="text" id="task" value={task} onKeyDown={addTask} onChange={handleTask} placeholder=' What needs to be done?'/>  
            <div>
                <ul>
                {
                    listTask.map((task, index) => {
                        return (
                        <li key={index}> <h3>{task} <button type='button' className='btn btn-close' onClick={(event) => handlerButtomDelete(index)}></button></h3> </li>
                        )
                    })
                }
                </ul>
            </div>
            <div className='m-1'> <p>{listTask.length === 0
              ? "No tasks, (😊Hola Jose...)"
              : listTask.length + " Item Left👍"}</p></div>    
        </div>
        
  );
};

export default TodoList;

