const mongoose  = require("mongoose")


const  tareaschema = mongoose.Schema({
    accion:{
        type:String,
        required:[true,"Ingrese descripcion"],
        minlength:[5,"La descripción debe tener minimo 10 caracteres."]
    }, 
    fechavecimiento: {
        // type:  new Date().toString(), 
        type: Date,
    	default: Date.now,
        required: [true, "You must select a date"]
    },
    status: {
        type: String,
         required: [true, "diga el tipo de prioridad que le corresponde"]
    }
   
},{timestamps:true});


const tarea = mongoose.model('tarea',tareaschema);
module.exports = tarea
