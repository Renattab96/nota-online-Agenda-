import React, { useState } from 'react'
// import {Link} from 'react-router-dom';
// import logintres from '../images/nandutiTres.jpg';
import imgRegister from '../images/img-register.jpg';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const Register = () => {

  const [nombre,setNombre] = useState('')
  const [apellido,setapellido]=useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')
  //  const [error, setError]= useState('');

  const navigate = useNavigate()

  const submitHandler = (e)=>{
      e.preventDefault()
      axios.post('http://localhost:8000/api/registro', {
          nombre,apellido, email, password, confirmPassword
      // })    
      }, {withCredentials:true})
      .then((res)=>{
          navigate('/')
          return res.status(200)
          // console.log(res)
          // navigate('/sign_in')
          

      }).catch((err)=>{
          // console.log(err)
          return err.status(400)
      })
  }

  return (
    <div className=''>
        <div className="h-screen flex">
          <div className="hidden lg:flex w-full lg:w-1/2 login_img_section justify-around items-center border-2">
          <img src={imgRegister} className='w-full h-full' alt='nanduti-login'/>
          </div>
          <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
            <div className="w-full px-8 md:px-32 lg:px-24">
            <form className="bg-grey rounded-md" onSubmit={submitHandler}>
              <div>
  {/* <div className="container max-w-screen-lg mx-auto"> */}
    <div><div className="bg-white p-4 px-4 md:p-8 mb-6">
            <h1 className="text-blue-900 font-bold text-3xl mb-3">Crea una cuenta</h1>
        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2">
          <div className="lg:col-span-2">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-5">
                <label for="full_name" className='text-2xl text-blue-900' >Fist Name</label>
                <input type="text" name="full_name" id="full_name" className="h-14 border mt-1 rounded px-4 w-full bg-gray-50 border-blue-900 placeholder-blue-900 rounded-2xl"  placeholder="First Name" onChange={(e)=>setNombre(e.target.value)} />
              </div>
              <div className="md:col-span-5">
                <label for="full_name" className='text-2xl text-blue-900'>Last Name</label>
                <input type="text" name="full_name" id="full_name" className="h-14 border mt-1 rounded px-4 w-full bg-gray-50 border-blue-900 placeholder-blue-900 rounded-2xl"   placeholder="Last Name " onChange={(e)=>setapellido(e.target.value)}/>
              </div>

              <div className="md:col-span-5">
                <label for="email" className='text-2xl text-blue-900'>Email Address</label>
                <input type="text" name="email" id="email" className="h-14 border mt-1 rounded px-4 w-full bg-gray-50 border-blue-900 placeholder-blue-900 rounded-2xl"  placeholder="email@domain.com" onChange={(e)=>setEmail(e.target.value)}/>
              </div>

              <div className="md:col-span-5">
                <label for="email" className='text-2xl text-blue-900'>Password</label>
                <input type="password" name="password" id="password" className="h-14 border mt-1 rounded px-4 w-full bg-gray-50 border-blue-900 placeholder-blue-900 rounded-2xl" placeholder="password"onChange={(e)=>setPassword(e.target.value)} />
              </div>

              <div className="md:col-span-5">
                <label for="email" className='text-2xl text-blue-900'>Confirm Password</label>
                <input type="password" name="password" id="password" className="h-14 border mt-1 rounded px-4 w-full bg-gray-50 border-blue-900 placeholder-blue-900 rounded-2xl"  placeholder="password" onChange={(e)=>setConfirmPassword(e.target.value)}/>
              </div>

              <div className=" md:col-span-5 text-right">
                <div className=" inline-flex w-full">
                  <button className="block w-full bg-orange-600 mt-5 py-3 rounded-2xl hover:bg-orange-700 hover:-translate-y-1 transition-all duration-500 text-white text-2xl font-semibold mb-2">Submit</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
</div>
            </form>
            </div>
            
          </div>
      </div>
    </div>
  )
}

export default Register
