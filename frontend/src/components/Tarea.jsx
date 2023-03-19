import React, { useState, useEffect } from 'react'
import Navbar from './Navbar';
import axios from 'axios';
// import { useParams } from 'react-router-dom';
import moment from 'moment';
import BtnTareaProgress from './BtnTareaProgress';
import BtnTareaCompleta from './BtnTareaCompleta';
import BtnTareaEliminada from './BtnTareaEliminada';


const Task = () => {
  // inicio agregar tarea
  const [accion, setAccion] = useState('');
  const [status, setStatus] = useState('uno');
  const [fechavencimiento, setFechavencimiento] = useState('');

  // const {id} = useParams();
  const addProyecto = (e) => {
    e.preventDefault()
    axios.post(`http://localhost:8000/api/creartarea`, {
      accion, fechavencimiento, status
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err)
    })
  }
  // fin agregar tarea

  // inicio listar tareas en el dashboard de tareas
  const [projects, setProjects] = useState([]);

  const displayProjects = () => {
    axios.get('http://localhost:8000/api/tareas')
      .then((res) => {
        setProjects(res.data)
      })
      .catch((err) => {
        // console.log(err)
        console.log(err);
      })
  }

  useEffect(() => {
    displayProjects();
  }, [projects])

  function PastDueDate(fechavencimiento) {
    return new Date(new Date().toString())
  }

  return (
    <>
      <Navbar />





      <div className="flex h-[100vh] bg-white ">
        {/* carga de datos */}
        <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3 xl:w-2/3 2xl:w-2/3 mb-2">
          {/* tarjeta del historial */}
          <div className="flex flex-col justify-center items-stretch mt-10 m-10">

            <div className=' overflow-auto bg-white shadow-2xl flex w-full flex-col items-center rounded-[20px] w-[400px] mx-auto m-2 p-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none' >
              <div className='dashboard-tab'>
                <table className='table-fixed w-full text-center'>
                  <thead className='border-b-4 border-blue-900 '>
                    <tr className='' >
                      <th scope="col-1" className='col-1 text-2xl text-blue-800 ' >Backlog</th>
                      <th scope="col-2" className='col-2  text-2xl text-blue-800 ' >In Progress</th>
                      <th scope="col-3" className='col-3  text-2xl text-blue-800 '>Completed</th>
                    </tr>
                  </thead>
                  <tbody className=' align-top' >
                    <tr className=''>
                      <td className='td-css' >
                        <div className='td-css grid grid-cols-1 gap-4 p-2 m-2 '>
                          {
                            projects.filter(pro => pro.status === 'uno').map(pro =>
                              <div key={pro._id} className='task-card-border border-blue-500 border-4 p-2 m-2 rounded-[20px]' >
                                <h4>{pro.accion}</h4>
                                <h6>Fecha:{moment(pro.fechavencimiento).format('MM-DD-YYYY')}</h6>
                                <BtnTareaProgress
                                  projectId={pro._id}
                                  Update={displayProjects}
                                />
                              </div>
                            )
                          }
                        </div>
                      </td>
                      <td className='td-css' >
                        <div className='grid grid-cols-1 gap-4 p-2 m-2 '>
                          {
                            projects.filter(pro => pro.status === 'dos').map(pro =>
                              <div key={pro._id} className='task-card-border border-blue-500 border-4 p-2 m-2 rounded-[20px]' >
                                <h4>{pro.accion}</h4>
                                {
                                  PastDueDate(pro.fechavencimiento) ? <h6>Fecha:{moment(pro.fechavencimiento).format('MM-DD-YYYY')}</h6> :
                                    <h6>Fecha:{moment(pro.fechavencimiento).format('MM-DD-YYYY')}</h6>
                                }
                                <BtnTareaCompleta
                                  projectId={pro._id}
                                  Update={displayProjects}
                                />

                              </div>
                            )
                          }
                        </div>
                      </td>
                      <td className='td-css'>
                        <div className='grid grid-cols-1 gap-4 p-2 m-2 '>
                          {
                            projects.filter(pro => pro.status === 'tres').map(pro =>
                              <div key={pro._id} className='task-card-border border-blue-500 border-4 p-2 m-2 rounded-[20px]'  >
                                <h4>{pro.accion}</h4>
                                <h6>Fecha:{moment(pro.fechavencimiento).format('MM-DD-YYYY')}</h6>
                                <BtnTareaEliminada
                                  projectId={pro._id}
                                  Update={displayProjects}
                                />
                              </div>
                            )
                          }
                        </div>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot className='tfoot-btn'>
                  </tfoot>
                </table>
              </div>
            </div>
          </div >
        </div >

        {/* historial de la carga de datos */}
        < div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3 mb-2 2xl:w-1/3" >
          {/* Tarjeta de carga de datos */}
          < div className=" flex flex-col justify-center items-center mt-20 m-20" >
            <form onSubmit={addProyecto} className="border-0 border-blue-900 shadow-2xl flex w-full flex-col items-center rounded-[20px] w-[400px] mx-auto p-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none" >
              <div className=" mt-7 mb-5 flex w-full flex-col items-center">
                <h3 className="text-2xl sm:text-2xl md:text-3xl xl:text-3xl 2xl:text-3xl font-bold text-blue-900 dark:text-white">
                  Actividades
                </h3>
                <p className="text-2xl sm:text-2xl md:text-3xl xl:text-3xl 2xl:text-4xl font-normal text-orange-500"></p>
              </div>
              <div className=" mt-6 mb-3 flex flex-wrap gap-10 md:!gap-5">
                <div className="flex flex-col items-center justify-center">
                  <p className="text-1xl sm:text-1xl md:text-1xl xl:text-2xl 2xl:text-2xl font-normal text-blue-900">Actualice su Tablero</p>
                  {/* <p className="text-2xl sm:text-2xl md:text-3xl xl:text-3xl 2xl:text-4xl font-bold text-blue-800 dark:text-white">Fecha</p> */}
                </div>

              </div>
              {/* Inputs de conceptos  */}
              <div className='flex flex-col w-full' >

                <div>
                  <label className="text-1xl text-blue-900 dark:text-gray-200" htmlFor="username">Descripcion</label>
                  <input id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-blue-900 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" placeholder='Descripcion'
                    onChange={(e) => setAccion(e.target.value)} value={accion} />
                </div>

                <div>
                  <label className="text-1xl text-blue-900 dark:text-gray-200" htmlFor="username">Fecha</label>
                  <input id="username" type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-blue-900 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    onChange={(e) => setFechavencimiento(e.target.value)} value={fechavencimiento} />
                </div>

              </div>

              {/* botones de ingreso y egreso */}
              <div className='grid grid-cols-1 gap-6 mt-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1'>
                <div className="flex justify-end mt-6">
                  <button className="px-8 py-3 leading-5 text-white text-2xl transition-colors duration-200 transform bg-green-500 rounded-md hover:bg-green-700 focus:outline-none focus:bg-gray-600">Agregar Tarea</button>
                </div>
                {/* <div className="flex justify-end mt-6">
            <button className="px-8 py-3 leading-5 text-white text-2xl transition-colors duration-200 transform bg-red-500 rounded-md hover:bg-red-700 focus:outline-none focus:bg-gray-600">Egreso</button>
          </div> */}
              </div>
            </form>
          </div >
        </div >
      </div >
    </>

  )
}

export default Task
