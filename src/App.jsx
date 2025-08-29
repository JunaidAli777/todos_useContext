//import './App.css'
import TodosProvider from './context/TodosProvider'
import TodoForm from './TodoForm'
import Todos from './Todos'

function App() {

  return (
    <TodosProvider>
      <div
        className='bg-gray-800 p-4 gap-4  h-screen flex flex-col justify-start items-center'>
        <h1 className='text-white text-3xl'>
          Todos:
        </h1>
        <TodoForm />
        <Todos />
      </div>
    </TodosProvider>
  )
}

export default App
