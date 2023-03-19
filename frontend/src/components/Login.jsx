import React ,{useState}from 'react';
import {Link} from 'react-router-dom';

import imgLogin from '../images/img-login.jpg'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'

const Login = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const navigate = useNavigate();
  const {id} = useParams();
    
  const formSubmitHandler =(e)=>{
        e.preventDefault()
        axios.post("http://localhost:8000/api/login/",{
          email,
          password
        },{withCredentials:true, Credential:'include'})
        .then((res)=>{
            console.log(res)
            navigate('/tarea')
            // navigate(`/user_data/${id}`)  
        })
        .catch((err)=>{
             return err.status(400)
        })
      }     


  return (
    <div className=''>
        <div className="h-screen flex">
          <div className="hidden lg:flex w-full lg:w-1/2 login_img_section justify-around items-center border-2">
          <img src={imgLogin} className='w-full h-full ' alt='nanduti-login'/>
          </div>
          <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
            <div className="w-full px-8 md:px-32 lg:px-24">
              
            <form className="bg-white rounded-md shadow-2xl p-6" onSubmit={formSubmitHandler}>
              <h1 className="text-blue-900 font-bold text-3xl mb-1">Bienvenido</h1>
              <Link to='/register' ><p className="text-sm font-normal text-blue-900 mb-8">No posee una cuenta? Empecemos</p></Link>
              <label for="full_name" className='px-3 text-2xl text-blue-900' >Email</label>
              <div className="border-blue-900 flex items-center border-2 mb-8 py-4 px-3 rounded-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
                <input id="email" className="placeholder-blue-900 pl-2 w-full outline-none border-none  " type="email" name="email" placeholder="Email Address"  onChange={(e)=>setEmail(e.target.value)} />
              </div>
              <label for="full_name" className='px-3 text-2xl text-blue-900'>Password</label>
              <div className="border-blue-900 flex items-center border-2 mb-12 py-4 px-3 rounded-2xl ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-900" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" className="evenodd" />
                </svg>
                <input className=" placeholder-blue-900 pl-2 w-full outline-none " type="password" name="password" id="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                
              </div>
              <button type="submit" className="block w-full bg-orange-500 mt-5 py-4 rounded-2xl hover:bg-orange-700 hover:-translate-y-1 transition-all duration-500 text-white text-2xl font-semibold mb-2">Login</button>
              <div className="flex justify-between mt-4">
              </div>
              
            </form>
            </div>
            
          </div>
      </div>
    </div>
  )
}

export default Login;
