const UserController = require('../controllers/users.controller')
const { authenticate } = require('../configs/jwt.config');

module.exports = function(app) {
    app.post('/api/user/register', UserController.register)
    app.post('/api/user/login', UserController.login)
    app.post('/api/user/logout', UserController.logout)

    app.get('/api', UserController.index)
    app.post('/api/user', UserController.createUser)
    app.get('/api/user', UserController.getAllUsers)
    app.get('/api/user/:id', UserController.getUser)
    app.put('/api/user/:id', UserController.updateUser)
    app.delete('/api/user/:id', UserController.deleteUser)
    app.get('/api/auth', authenticate, UserController.getLoggedUser)
}