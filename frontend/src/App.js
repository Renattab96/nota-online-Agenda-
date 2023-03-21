import React from 'react';
import {Routes, Route} from 'react-router-dom'
import './App.css';
// import Balance from './components/Balance';
import Login from './components/Login';
import Register from './components/Register';
import Task from './components/Tarea';
// import Task from './components/Tarea';
// import UserData from './components/UserData';
// import {useNavigate} from 'react-router-dom'
// import BtnLogout from './components/BtnLogout';

function App() {
  
  return (

    //  <Link to='/'>Login</Link> || {' | '}
    //   <Link to='/register'>Register</Link> || {' | '}
    //   <Link to='/tarea'>Tarea</Link> || {' | '}
    //   <Link to='/user_data/:id'>Usuario</Link> || {' | '}
    //   <Link to='/balance'>Balance</Link> || {' | '}  
    
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/tarea' element={<Task />} />
        {/* <Route path='/user_data/:id' element={<UserData />} />
        <Route path='/balance' element={<Balance/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
