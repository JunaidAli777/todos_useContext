import React, { useContext, useState } from 'react'
import { TodosContext } from './context/TodosContext'
import { MdEdit, MdDelete, MdSave } from "react-icons/md";
import { IoMdCheckmarkCircle } from "react-icons/io";

const TodoItem = ({ todo }) => {
    const [isEditable, setIsEditable] = useState(false);
    const [editedTodo, setEditedTodo] = useState(todo.todo);
    const { checkUnCheckTodo, deleteTodo, updateTodo } = useContext(TodosContext)
    return (
        <div
            className="flex justify-between items-center w-lg text-white text-2xl bg-white/25 mb-2 p-2 rounded-lg">
            <div>
                <input
                    type="checkbox"
                    checked={todo.checked}
                    className="cursor-pointer mr-2"
                    onChange={() => checkUnCheckTodo(todo.id)}
                />
                {isEditable ? (
                    <input
                        className='bg-white rounded-lg text-gray-800 px-4 py-1'
                        type="text"
                        value={editedTodo}
                        onChange={(e) => setEditedTodo(e.target.value)}
                    />
                ) : (
                    <p
                        className={`inline ${todo.checked && "line-through"} px-4`}>
                        {todo.todo}
                    </p>
                )}
            </div>
            <div>
                {isEditable ? (
                    <button
                        className='cursor-pointer mr-4'
                        onClick={() => {
                            updateTodo(todo.id, editedTodo)
                            setIsEditable(false)
                        }}>
                        <IoMdCheckmarkCircle />
                    </button>
                ) : (
                    <button
                        onClick={() => { setIsEditable(true) }}
                        disabled={todo.checked}
                        className="cursor-pointer mr-4">
                        <MdEdit />
                    </button>
                )}
                <button
                    onClick={() => deleteTodo(todo.id)}
                    className="cursor-pointer">
                    <MdDelete />
                </button>
            </div>
        </div>
    )
}

export default TodoItem
