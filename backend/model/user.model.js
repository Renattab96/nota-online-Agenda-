const mongoose = require ('mongoose')
const  bcrypt = require('bcrypt')
const Schema = mongoose.Schema
var  uniqueValidator  =  require ( 'mongoose-unique-validator' ) ;
// const  balance  = require('./balance.model');

 const userSchema =  new Schema({
   
    nombre:{
        type:String,
        required:[true,"ingrese el Nombre en el campo Obligatorio"],
        unique: true,
        message: "Ingrese su nombre para registrarse "
    },
    apellido:{
        type:String,
        required:[true,"ingrese el apellido en el campo Obligatorio"],
        // unique: true,
        message: "Ingrese su nombre para registrarse "
    },
    email:{
        type:String,
        required:[true,"Ingrese el correo electronico correcto"],
        unique:[true, "El email ya esta registrado"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Correo invalido vuelva intentar "
          }        
    },
    password:{
        type:String,
        required:[true ,"Por favor ingrese valores entre 8 y con mayusculas y numeros"],
        minlength:[8,"contrasena incorrecta verifique nuevamente "]
        // maxlength:[10, "Debe ingresar caracteres menores de 10"]

    },
    cargo:{type:String},
    telefono:{type:Number},
    tipo_cuenta:{type:String},
    sueldo_inicial:{type:Number},
    tarea:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref:'tarea'
        }
    ],
    presupuesto:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref:'balance'
        }
    ]

 } ,{timestamps:true})
 userSchema.plugin(uniqueValidator);

//midleware para el post 
userSchema.pre('save', async function(next){
    try{
        const hashedPassword = await bcrypt.hash(this.password, 10)
        console.log("Hashed Contrasena " ,hashedPassword) 
        this.password = hashedPassword
        next()
    }catch{
        console.log("Error al guardar la contrasena " , error) 
    }
})  

 module.exports= mongoose.model('Usuario', userSchema)