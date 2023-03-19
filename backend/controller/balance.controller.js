const balance = require('../model/balance.model')
const Usuario = require('../model/user.model')
const gastos = require('../model/gastos.model')



const crearbalance = async (req, res)=>{
    const {id} = req.params
    try{
        const usuario = await Usuario.findById(id).exec()
        console.log(usuario, "aqui usuario")
        const gastosnew = new balance(req.body)
        console.log(gastosnew._id, "id del presupuesto")
        usuario.presupuesto.addToSet(gastosnew._id);
        await usuario.save()
        await gastosnew.save()
        res.status(201).json(usuario.gastosnew)
    }
    catch(error){
        console.log(error)

    }
}
const obtenerbalance=(req, res)=>{
    balance.find(req.body)
    .then((resultado)=>{
        res.json(resultado)
    })
    .catch((error)=>{
        console.log(error)
    })
}
const obtenerUnabalance=(req, res)=>{
    balance.findById(req.params.id)
    .then((resultado)=>{
        res.json(resultado)
    })
    .catch((error)=>{
        console.log(error)
    })
}


const AgregarGastos  = async (req, res)=>{
    const {id} = req.params
    try{
        const presupuesto = await balance.findById(id).exec()
        console.log(presupuesto, "aqui presupuesto")
        const gasto = new gastos(req.body)
        console.log(gasto._id, "id del pago ingresado")
        presupuesto.pagos.addToSet(gasto._id);
        await presupuesto.save()
        await gasto.save()
        res.status(201).json(presupuesto.gastos)
    }
    catch(error){
        console.log(error)

    }
}


const editarbalance=(req, res)=>{
    balance.updateOne({_id: req.params.id},req.body)
    .then((resultado)=>{
        res.json(resultado)
    })
    .catch((error)=>{
        console.log(error)
    })
}


const eliminarbalance=(req, res)=>{
    balance.deleteOne({_id: req.params.id})
    .then((resultado)=>{
        res.json(resultado)
    })
    .catch((error)=>{
        console.log(error)
    })
}
const eliminarpago= async (req, res)=>{
    const {id} = req.params
    gastos.deleteOne({_id:id})
    .then((resultado)=>{
        res.json(resultado)
    })
    .catch((error)=>{
        console.log(error)
    })
}
const editarpagos=(req, res)=>{
    gastos.updateOne({_id: req.params.id},req.body)
    .then((resultado)=>{
        res.json(resultado)
    })
    .catch((error)=>{
        console.log(error)
    })
}
const obtenerpagos=(req, res)=>{
    gastos.find({})
    .then((resultado)=>{
        res.json(resultado)
    })
    .catch((error)=>{
        console.log(error)
    })
}
module.exports={
    obtenerbalance,
    obtenerUnabalance,
    editarbalance,
    crearbalance,
    eliminarbalance,
    AgregarGastos,
    eliminarpago,
    editarpagos, obtenerpagos

}