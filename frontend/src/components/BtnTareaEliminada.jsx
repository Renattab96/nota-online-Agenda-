import React from 'react'
import axios from 'axios'

const BtnTareaEliminada = ({projectId}, props) => {

  const statusUpdate=(e)=>{
    e.preventDefault();
    axios.delete(`http://localhost:8000/api/tarea/eliminar/${projectId}`,{
    }).then((res)=>{
        props.Update();
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
    <>
    <button className='btn-remove bg-red-500 border-red-700 border-2 rounded-[20px] px-2 py-1 text-white' type="submit" onClick = {statusUpdate}> Remove project </button>
    </>
  )
}

export default BtnTareaEliminada