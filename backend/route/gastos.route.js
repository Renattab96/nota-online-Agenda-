const Controllergastos = require('../controller/gastos.controller')
// const {authenticate} = require('../config/jwt.config')
module.exports = (app) => {
  app.post('/api/crearpagos/',Controllergastos.unpagoadd)
  //agrega el pago en el balance correspondiente
  app.post('/api/balance/agregarpagos/:id',Controllergastos.AgregarGastos)
  //listar pagos 
  app.get('/api/pagos/',Controllergastos.obtenerpagos)
  //editar gastos 
  app.put('/api/balance/editar/:id', /*authenticate*/  Controllergastos.editarpagos)
  //eliminar gastos 
  app.delete('/api/usuario/balance/pago/eliminar/:id', /*authenticate*/  Controllergastos.eliminarpago)


 //Cambia datos de el presupuesto o balance 
  
  

}