const UserController = require('../controllers/users.controller')
module.exports = function(app) {
    app.get('/api', UserController.index)
    app.post('/api/user', UserController.createUser)
    app.get('/api/user', UserController.getAllUsers)
    app.get('/api/user/:id', UserController.getUser)
    app.put('/api/user/:id', UserController.updateUser)
    app.delete('/api/user/:id', UserController.deleteUser)
}