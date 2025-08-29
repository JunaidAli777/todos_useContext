import { useState } from "react";
import { TodosContext } from "./TodosContext";
const TodosProvider = ({ children }) => {

    const [todos, setTodos] = useState(
        JSON.parse(localStorage.getItem("todos") || "[]")
    );

    // const addTodo = (todo) => {
    //     setTodos([...todos, { id: new Date(), todo, checked: false }])
    //     localStorage.setItem("todos", JSON.stringify(todos))
    // } this is problematic because setTodo is asyncronous and the todo state is NOT 
    // updated until the next render so when we do 
    // localStorage.setItem("todos", JSON.stringify(todos)) what happens is the same old
    // todo of the previous state is stored in the localStorage

    const addTodo = (todo) => {
        const newTodos = [...todos, { id: new Date(), todo, checked: false }];
        setTodos(newTodos)
        localStorage.setItem("todos", JSON.stringify(newTodos))
    }
    
    const updateTodo = (id, todoToUpdate) => { 
        const newTodos = todos.map((todo) => {
           return todo.id === id ? {...todo, todo: todoToUpdate} : {...todo}
        })
        setTodos(newTodos)
        localStorage.setItem("todos", JSON.stringify(newTodos))
     }

    const deleteTodo = (id) => {
        const newTodos = todos.filter((todo) => {
            return todo.id !== id && { ...todo }
        })
        setTodos(newTodos)
        localStorage.setItem("todos", JSON.stringify(newTodos))
    }

    const checkUnCheckTodo = (id) => {
        const newTodos = todos.map((todo) => {
            return todo.id === id ? { ...todo, checked: !todo.checked } : { ...todo }
        })
        setTodos(newTodos)
        localStorage.setItem("todos", JSON.stringify(newTodos))
    }
    return (
        <TodosContext.Provider
            value={{ todos, setTodos, addTodo, updateTodo, deleteTodo, checkUnCheckTodo }}
        >
            {children}
        </TodosContext.Provider>
    )
}

export default TodosProvider
