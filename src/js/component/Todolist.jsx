import React, {useState} from 'react'

const TodoList = () => {
    const [task, setTask] = useState('');
    const [listTarea, setListTarea] = useState([]);

    return (
        <div className="Container text-center">
        <h1>Todo List</h1>
            <input type="text" />
        </div>
  );
};

export default TodoList;
