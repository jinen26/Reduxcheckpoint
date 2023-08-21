import React, { useState } from 'react'
import Task from './Task'
import { useDispatch, useSelector } from 'react-redux'
import { addtask } from '../slice/Taskslice'

const Tasklist = () => {
const [newtask, setnewtask] = useState({
    title:"",
    isDone:false,
})
const [show, setshow] = useState(0)
const dispatch = useDispatch() ;
let tasks = useSelector((state)=>state.todo.tasks); //error solved***
  return (
    <div className='list'>
        <h1>To Do list with Redux</h1>
        <div className="typing">
            <input type="text" />
            <button onClick={()=>dispatch(addtask(newtask))}>add</button>
            <button onClick={()=>setshow(0)}>All</button>
            <button onClick={()=>setshow(1)}>Done</button>
            <button onClick={()=>setshow(2)}>Undone</button>
            {tasks.filter(el=>show===1?el.isDone===true:show===2?el.isDone===false:tasks).map(el=><Task el={el}/>)}
        </div>
        
    </div>
  )
}

export default Tasklist
