import { useContext, useState } from "react"
import { TodosContext } from "./context/TodosContext"

const TodoForm = () => {
    const [todo, setTodo] = useState("")

    const { addTodo } = useContext(TodosContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(todo)
        setTodo("")
    }

    return (
        <form onSubmit={handleSubmit} className='flex gap-2'>
            <input
                className='text-2xl text-white border-2 rounded-lg px-6 py-0.5 border-gray-500'
                type="text"
                placeholder='write todo...'
                value={todo}
                onChange={(e) => { setTodo(e.target.value) }}
            />
            <button
                className='bg-green-700 hover:bg-green-600 text-2xl text-white rounded px-6 py-0.5 cursor-pointer'
                type='submit'>
                Add
            </button>
        </form>
    )
}

export default TodoForm
