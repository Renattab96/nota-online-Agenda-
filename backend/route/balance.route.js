const balanceController = require('../controller/balance.controller')
// const {authenticate} = require('../config/jwt.config')
module.exports = (app) => {
  //crea el balance con el usuario
  app.post("/api/balance/usuario/:id" ,balanceController.crearbalance)
  //agrega el pago en el balance correspondiente
  app.post('/api/balance/agregarpagos/:id',balanceController.AgregarGastos)
 //Cambia datos de el presupuesto o balance 
  app.put('/api/balance/editar/:id', /*authenticate*/  balanceController.editarbalance)
  //Brra el control hecho en e presupuesto
  app.delete('/api/balance/eliminar/:id', /*authenticate*/  balanceController.eliminarbalance)
  //enlista presupuestos cargados
  app.get('/api/balances',/*authenticate*/ balanceController.obtenerbalance)
  //Filtra por id los balances 
  app.get('/api/balance/:id', /*authenticate*/  balanceController.obtenerUnabalance)
  

}