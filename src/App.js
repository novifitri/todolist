import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
function App() {
  const [todos, setTodos] = useState( [
    {
        id: '1',
        name: 'Belajar React',
        date: '2022-06-13'
    },
    {
        id: '2',
        name: 'Belajar Tailwind',
        date: '2022-06-13'
    },
  ])
  const eventCreateTodo = (todo) =>{
    //cara 1 mengabungkan data lama dan baru
    const temp = [...todos]
    temp.push(todo)
    setTodos(temp)
    //cara 2 
    /*
    setTodos(todos.concat(todo))
    */
    console.log(todos)
  }
  return (
    <div className='container mx-auto px-4flex justify-center items-center flex-col' >
      <TodoForm onCreateTodo ={eventCreateTodo}/>
      <TodoList dataTodos={todos}/>
    </div>
  );
}

export default App;
