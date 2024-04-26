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
    },
    {
        id: 4,
        title: 'approve pull request from Fpsska :)',
        isCompleted: true,
    }
]

const Home = () => {
    const [todos, setTodos] = useState(data)

    const changeTodo = (id) => {
        setTodos((data) => {
            return data.map((item) => {
                if (item.id !== id) return item;
                return {...item, isCompleted: !item.isCompleted}
            })
        })
    }

    const removeTodo = (id) => {
        setTodos((data) => {
            return data.filter((item) => item.id !== id) 
            // .filter() не мутирующий метод, он создаёт новый массив, и можно не делать копию [...data]
        })
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