import React, { useState } from 'react'
import Task from './Task'
import { useDispatch, useSelector } from 'react-redux'
import { addtask } from '../Slices/Taskslice'

const Tasklist = () => {
const [newtask, setnewtask] = useState({
    title:"",
    isDone:false,
})
const [show, setshow] = useState(0)
const dispatch = useDispatch() ;
  return (
    <div className='list'>
        <h1>To Do list with Redux</h1>
        <div className="typing">
            <input type="text" />
            <button onClick={()=>dispatch(addtask)}>add</button>
            <button onChange={()=>setshow(0)}>All</button>
            <button onChange={()=>setshow(1)}>Done</button>
            <button onChange={()=>setshow(2)}>Undone</button>
            {Tasks.filter(el=>show===1?el.isDone===true:show===2?el.isDone===false:tasks).map(el=><Task el={el}/>)}
        </div>
        
    </div>
  )
}

export default Tasklist
