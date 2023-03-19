const controllerUser = require('../controller/user.controller')
// const authenticate = require('../config/jwt.config')

module.exports = (app) => {
  
  app.post('/api/registro/',controllerUser.registrarUsuario)
  app.post('/api/login/', controllerUser.loginUsuario)
  app.get('/api/cerrarsession/',controllerUser.logOutUser)
  app.get('/api/registroexitoso',controllerUser.UsuariosRegistrados)
  app.put('/api/actualizar-info/:id',controllerUser.informacionCuenta)
  app.get('/api/usuario/:id',controllerUser.obtenerUsuario)
  
}