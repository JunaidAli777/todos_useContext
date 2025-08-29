import { useContext } from "react"
import { TodosContext } from "./context/TodosContext"
import TodoItem from "./TodoItem"


const Todos = () => {
    const { todos } = useContext(TodosContext)
    return (
        <div>
            {todos.length > 0 && (todos.map((todo) => {
                return (
                    <TodoItem key={todo.id} todo={todo} />
                )
            }))}
        </div>
    )
}

export default Todos
