import React, { useState } from 'react';

function TodoForm(props) {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            id: +new Date(),
            name: name,
            date: date
        }
        props.onCreateTodo(newTodo)
        setName('')
        setDate('')
    }
    return (
        <div >
           <div className='w-full mt-4 bg-rose-400 h-32 flex rounded-t-lg items-center justify-center'>
            <h1 className="text-5xl font-bold  uppercase">
                    TodoList
                </h1>
           </div>
           
          <div className='w-full px-8 bg-rose-300 inline-block rounded-b-lg'>
          <form className='mt-4 flex flex-col' onSubmit={handleSubmit}>
                <label className='text-2xl' htmlFor='task'>Task</label>
                <input 
                className='py-2 rounded-lg'
                type='text'
                id='task'
                name='task'
                value={name}
                onChange={(e)=> {setName(e.target.value)}}
                />
                <label className='text-2xl' htmlFor='task'>Deadline</label>
                <input 
                className='py-2 rounded-lg'
                type='date'
                id='task'
                name='task'
                value={date}
                onChange={(e)=>{setDate(e.target.value)}}
                />
                <button type='submit' className='px-[30px] py-[10px] my-3 rounded-lg  bg-blue-400 hover:bg-blue-500 text-white font-semibold font-2xl'>Add task</button>
            </form>
          </div>
        </div>
    );
}

export default TodoForm;