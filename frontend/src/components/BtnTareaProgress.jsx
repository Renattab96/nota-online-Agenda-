import React,{useState} from 'react'
import axios from 'axios';

const BtnTareaProgress = ({projectId}, props) => {
    const [status, setStatus] = useState('dos');
    
    const statusUpdate =(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/edit/tarea/${projectId}`,{
            status
        }).then((res)=>{
            // console.log(res.data);
            props.Update()
        }).catch((err)=>{
            // console.log(err)
        })
    }

  return (
    <div>
        <button className='btn-progress bg-green-400 border-green-900 border-2 rounded-[20px] px-2 py-1 ' onClick={statusUpdate} >Start Project</button>
    </div>
  )
}

export default BtnTareaProgress