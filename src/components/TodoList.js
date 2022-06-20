import React from 'react';

function TodoList(props) {
    const handleEdit =(id)=>{
        props.handleEdit(id)
    }

    return (
        <div >
            <h2 className='font-bold text-xl text-center lg:text-left mt-4'>List Todo</h2>
            <div className='bg-rose-200 flex flex-col items-center rounded-lg'>
               {props.dataTodos.map((todo) => (
                    <div key={todo.id} className= 'px-4 py-8 my-4 flex justify-between bg-slate-50 w-5/6 rounded-md'>
                    <div>
                        <h3 className='text-lg font-semibold'>{todo.name}</h3>
                        <p>{todo.date}</p>
                    </div>
                    <div className='flex flex-col justify-between'>
                    <button onClick={()=> {handleEdit(todo.id)}}
                    className='rounded-xl px-[20px] py-[5px] my-1 bg-yellow-300 hover:bg-yellow-400'>Edit</button>
                    <button onClick={()=> {props.handleDelete(todo.id)}}
                    className='rounded-xl px-[20px] py-[5px] my-1 bg-red-500 hover:bg-red-600' >Delete</button>
                    </div>
                    </div>
                 )  
                )}   
            </div>
        </div>
    );
}

export default TodoList;