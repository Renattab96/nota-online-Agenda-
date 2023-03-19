const mongoose = require('mongoose')

mongoose.set('strictQuery', true)


mongoose.connect('mongodb://127.0.0.1:27017/notaOnline',{
    useNewUrlParser:true,
    useUnifiedTopology: true
})
.then(() =>console.log("Conectado a la base de datos"))
.catch(err => console.log("Error al conectar a la base de datos", err))