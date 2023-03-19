const cors = require('cors')
const express = require('express')
const app = express()
const PORT = 8000
require('dotenv').config()
const cookieParser = require ('cookie-parser')

require('./config/mongoose.config')

//Middleware

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser())

//cors

app.use(cors({
    origin:'http://localhost:3000',
    credentials:true 
    
}))

//Ruta para importar el backend
const rutasUsuarios = require ('./route/user.route')
rutasUsuarios(app);
const balanceRoute = require('./route/balance.route.js')
balanceRoute(app);
const comentarioRoute = require('./route/tarea.route')
comentarioRoute(app);
const gastosroute =require('./route/gastos.route')
gastosroute(app);

app.listen(PORT, () =>{
    console.log(`El servidor está listo en el puerto ${PORT}`)

})