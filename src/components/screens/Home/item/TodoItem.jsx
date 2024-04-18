import React from "react";
import Check from "./Chek";
import { FaTrash } from "react-icons/fa6";



const TodoItem = ({todo, changeTodo}) => {
    return (
        <button 
            className="flex items-center justify-between mb-4 rounded-2xl bg-pink-200 
            p-5 w-full"
            onClick={() => changeTodo(todo.id)}
        >
            <span className="flex items-center">
                <Check isCompleted={todo.isCompleted}/>
                {todo.title}
            </span>
            <FaTrash  
            size={22}
            className="hover:text-red-700 transition-colors ease-in-out duration-300"
            />
        </button>
    )
}

export default TodoItem