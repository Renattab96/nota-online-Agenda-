const TareaController = require('../controller/tarea.controller')
module.exports = (app) => {
    app.post("/api/tarea/usuario/:id" ,TareaController.creartarea)
    app.post("/api/creartarea/" ,TareaController.creartareaindi)
    app.get('/api/vertarea/:id',TareaController.obtenerUnatarea)
    app.put('/api/edit/tarea/:id',TareaController.editartarea)
    app.get("/api/tareas/",TareaController.tareasactuales)
    app.delete('/api/tarea/eliminar/:id',TareaController.eliminartarea)
}

   