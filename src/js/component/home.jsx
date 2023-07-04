import React from "react";
import TodoList from "./Todolist"

//create your first component
const Home = () => {
	return (
		<div className="Container text-center">
			<TodoList/>
		</div>
	);
};
export default Home;
