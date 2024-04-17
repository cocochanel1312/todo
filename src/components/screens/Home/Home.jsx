import React from "react";
import TodoItem from "./item/TodoItem";

const todos = [
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
    return (
        <div className=" text-black w-4/5 mx-auto">
            <h1 className="text-2xl font-bold text-center mb-10">My To-Do List </h1>
            {todos.map(todo => ( 
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    )
}

export default Home