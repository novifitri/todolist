import { useState } from 'react';
import './App.css';
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
  const [formData, setFormData] = useState({
    name: "", date: ""
  })
  const [isUpdate, setUpdate] = useState({id: null, status: false})
  const handleSubmit = (e) => {
    e.preventDefault();
    const temp = [...todos]
    if(!isUpdate.status) {
      const newTodo = {
          id: +new Date(),
          name: formData.name,
          date: formData.date
      }
      temp.push(newTodo)
    }else{
      temp.forEach((item)=>{
        if(item.id === isUpdate.id) {
          item.name = formData.name;
          item.date = formData.date;
        }       
      });  
    }
    setUpdate({id:null, isUpdate: false})
    setFormData({name: "", date:""})
    setTodos(temp)
}
  const handleChangeFormData =(e)=>{
    let data = {...formData};
    data[e.target.name] = e.target.value
    setFormData(data)
  }


  const handleEdit = (id)=>{
    let temp = [...todos]
    let formUpdate = temp.find((item)=>item.id === id)
    setUpdate({id: id, status:true})
    setFormData({name:formUpdate.name, date:formUpdate.date})
  }

  const handleDelete = (id) =>{
    let temp = [...todos]
    let filterTemp = temp.filter(item => item.id !== id);
    setTodos(filterTemp)
  }
  return (
    <div className='container mx-auto px-4flex justify-center items-center flex-col' >
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
                name='name'
                value={formData.name}
                onChange={handleChangeFormData}
                />
                <label className='text-2xl' htmlFor='task'>Deadline</label>
                <input 
                className='py-2 rounded-lg'
                type='date'
                id='task'
                name='date'
                value={formData.date}
                onChange={(e)=> {handleChangeFormData(e)}}
                />
                <button type='submit' className='px-[30px] py-[10px] my-3 rounded-lg  bg-blue-400 hover:bg-blue-500 text-white font-semibold font-2xl'>Submit</button>
            </form>
          </div>
        </div>
      <TodoList  handleEdit={handleEdit} handleDelete={handleDelete} dataTodos={todos}/>
    </div>
  );
}

export default App;
