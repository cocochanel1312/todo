import React, { useState } from "react";
import TodoItem from "./item/TodoItem";
import CreateTodoField from "./Create-todo-field/CreateTodoField";

const data = [
    {
        id: 1,
        title: 'Make a to-do list',
        isCompleted: false,
    },
    {
        id: 2,
        title: 'take a JS course',
        isCompleted: false,
    },
    {
        id: 3,
        title: 'take a React course',
        isCompleted: false,
    }
]

const Home = () => {
    const [todos, setTodos] = useState(data)

    const changeTodo = (id) => {
        const copy = [...todos]
        const current = copy.find(t => t.id === id)
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }

    const removeTodo = (id) => {
        setTodos([...todos].filter(t => t.id !== id))
    }

    return (
        <div className="text-black w-4/5 mx-auto">
            <h1 className="text-2xl font-bold text-center mb-10">My To-Do List</h1>
            {todos.map(todo => ( 
                <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    changeTodo={changeTodo} 
                    removeTodo={removeTodo}
                />
            ))}
            <CreateTodoField setTodos={setTodos} />
        </div>
    )
}

export default Home