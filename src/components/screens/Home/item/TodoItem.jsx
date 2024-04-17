import React from "react";
import Check from "./Chek";


const TodoItem = ({todo}) => {
    return (
        <div className="flex items-center mb-4 rounded-2xl bg-pink-300 p-5">
            <Check />
            {todo.title}
        </div>
    )
}

export default TodoItem