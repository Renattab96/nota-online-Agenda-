const mongoose  = require("mongoose")


const  balancechema = mongoose.Schema({
    presupuesto_title:{
        type:String,
        // required:[true,"Ingrese el nombre del balance "],       
        minlength:[3,"El nombre del balance debe tener mas de 3 caracteres"]
    },
    pagos:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'gastos'
        }

    ]
        
    
      
},{timestamps:true});
// balancechema.plugin(uniqueValidator);


const balance = mongoose.model('balance',balancechema);
module.exports = balance