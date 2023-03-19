const balance = require('../model/balance.model')
const Usuario = require('../model/user.model')
const gastos = require('../model/gastos.model')



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
const unpagoadd=(req, res)=>{
    gastos.create(req.body)
            .then((resultado)=>{
                res.json(resultado)
            }).catch((error)=>{
                console.log(error)
            })
        }

module.exports={
   
    AgregarGastos,
    eliminarpago,
    editarpagos, 
    obtenerpagos,
    unpagoadd

}