import React, {useState} from 'react'
const API_URL= "https://fake-todo-list-52f9a4ed80ce.herokuapp.com/todos/user/miguelweb"

const TodoList = () => {
    const [task, setTask] = useState("");
    const [listTask, setListTask] = useState([]);
    const handleTask = (event) => {
        setTask(event.target.value); 
    } 
    const addTask = (event) => {
        if (event.key == 'Enter' && task.trim() !== '') {
            setListTask([...listTask, task]);
            setTask('');
        }
    }
    const createUser = async () => {
          try {
            const requestOpt = {
                method: "POST",
                body: JSON.stringify([]),
                headers: {
                    "Content-Type": "application/json"
                }}
            const response = await fetch(API_URL, requestOpt)
                if (response.status == 201) {
                    // aqui llamo las tareas del ursuario
                } else if (response.status == 400) {
                    // el usuario existe , puedo llamar las tareas
                }

        } catch (error) { 
            console.log(error)
        }
    }

    const getAllUserTasks = async () => {
            try {
                const response = await fetch(API_URL)
                if (response.ok) {}

            } catch (error) {
             console.log(error)
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

