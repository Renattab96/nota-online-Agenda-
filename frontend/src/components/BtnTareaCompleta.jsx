import React,{useState} from 'react'
import axios from 'axios';

const BtnTareaCompleta = ({projectId}, props) => {
    const [status, setStatus] = useState('tres');
    
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
        <button className='btn-complete bg-yellow-300 border-2 border-yellow-500 rounded-[20px] px-2 py-1 ' onClick={statusUpdate} >Move to Complete</button> 
    </div>
  )
}

export default BtnTareaCompleta