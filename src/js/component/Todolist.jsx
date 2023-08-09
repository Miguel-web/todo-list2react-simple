import React, { useEffect, useState } from 'react'
const API_URL = "https://playground.4geeks.com/apis/fake/todos/user/miguelweb"

const TodoList = () => {
    const [task, setTask] = useState("");
    const [listTask, setListTask] = useState([]);
    const handleTask = (event) => {
        setTask(event.target.value);
    }
    const addTask = async (event) => {
        try {
            if (event.key == 'Enter' && task.trim() !== '') {
                const newTaskList = [...listTask, { label: task, done: false }];
                const response = await fetch(API_URL, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newTaskList)
                })
                if (response.ok) {
                    getAllUserTasks()
                }
                setTask('');
            }

        } catch (error) {
            console.log(error)
        }
    }
    const createUser = async () => {
        try {
            const requestOpt = {
                method: "POST",
                body: JSON.stringify([]),
                headers: {
                    "Content-Type": "application/json"
                }
            }
            const response = await fetch(API_URL, requestOpt)
            if (response.ok) {
                // aqui llamo las tareas del ursuario
                getAllUserTasks()
            } else if (response.status == 404) {
                // el usuario existe , puedo llamar las tareas
                getAllUserTasks()
            }

        } catch (error) {
            console.log(error)
        }
    }
    const getAllUserTasks = async () => {
        try {
            const response = await fetch(API_URL)
            if (response.ok) {
                const body = await response.json()
                setListTask(body)
            } else if (response.status == 404) {
                // el usuarion no existe , puedo crearlo
                createUser()
            }

        } catch (error) {
            console.log(error)
        }
    }
    const deleteUserTask = async (indexid) => {
        const newTaskList = listTask.filter((task, index) => (indexid != index))
        if (newTaskList.length == 0) {
            deleteAll()
        } else {

            try {
                const response = await fetch(API_URL, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newTaskList)
                })
                if (response.ok) {
                    getAllUserTasks()
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
    const deleteAll = async () => {
        try {
            const response = await fetch(API_URL, {
                method: "DELETE"
            })
            if (response.ok) {
                getAllUserTasks()
            } else if (response.status == 404) {
                getAllUserTasks()
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllUserTasks()
    }, [])

    return (
        <div className="text-center text-white d-flex align-items-center gap-3 flex-column">
            <h1>Todo List</h1>
            <input className="text-dark" type="text" id="task" value={task} onKeyDown={addTask} onChange={handleTask} placeholder=' What needs to be done?' />
            <div>
                <ul>
                    {
                        listTask.map((task, index) => {
                            return (
                                <li key={index}> <h3>{task.label} <button type='button' className='btn btn-close' onClick={(event) => deleteUserTask(index)}></button></h3> </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className='m-1'> <p>{listTask.length === 0
                ? "No tasks, (😊Hola Jose...)"
                : listTask.length + " Item Left👍"}</p></div>
            <button onClick={deleteAll}>Borrar Todo</button>
        </div>

    );
};
export default TodoList;
