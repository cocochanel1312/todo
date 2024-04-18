import React from "react";
import Check from "./Chek";
import { FaTrash } from "react-icons/fa6";



const TodoItem = ({todo, changeTodo, removeTodo}) => {
    return (
        <div 
            className="flex items-center justify-between mb-4 rounded-2xl bg-pink-200 
            p-5 w-full"
        >
            <button 
                className="flex items-center"
                onClick={() => changeTodo(todo.id)}
            >
                <Check isCompleted={todo.isCompleted}/>
                {todo.title}
            </button>
            <button 
            onClick={() => removeTodo(todo.id)}
            >
                <FaTrash  
                    size={22}
                    className="hover:text-red-700 transition-colors ease-in-out duration-300"
                />
            </button>
        </div>
    )
}

export default TodoItem