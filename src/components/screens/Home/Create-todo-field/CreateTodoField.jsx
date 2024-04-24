import React, { useState } from "react";
import { CgMathPlus } from "react-icons/cg";


const CreateTodoField = ({ setTodos }) => {
    const [title, setTitle] = useState('')

    const addTodo = (title) => {
        setTodos(prev => [
            {
                id: new Date(),
                title,
                isCompleted: false
            },
            ...prev,
        ])
        setTitle('')
    }

    return (
        <div className="flex items-center mb-4 rounded-2xl bg-pink-200 px-5 py-3 w-full mt-20">
            <CgMathPlus
                size={24} 
                className="mr-3"
            />
            <input 
                className="bg-transparent w-full border-none outline-none"
                type="text"
                onChange={e => setTitle(e.target.value)} 
                value={title}
                onKeyUp={e => e.key === 'Enter' && addTodo(title)}
                placeholder="Add a task"
            />
        </div>
    )
}

export default CreateTodoField