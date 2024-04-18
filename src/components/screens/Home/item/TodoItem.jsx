import React from "react";
import Check from "./Chek";


const TodoItem = ({todo, changeTodo}) => {
    return (
        <button className="flex items-center mb-4 rounded-2xl bg-pink-300 
        p-5 w-full"
        onClick={() => changeTodo(todo.id)}
        >
            <Check isCompleted={todo.isCompleted}/>
            {todo.title}
        </button>
    )
}

export default TodoItem