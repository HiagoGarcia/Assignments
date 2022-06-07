const UserController = require('../controllers/users.controller')
const DiscussionController = require('../controllers/discussions.controller')
const { authenticate } = require('../configs/jwt.config');

module.exports = function(app) {
    //User routes
    app.post('/api/user/register', UserController.register)
    app.post('/api/user/login', UserController.login)
    app.post('/api/user/logout', UserController.logout)
    app.get('/api', UserController.index)
    app.get('/api/user', UserController.getAllUsers)
    app.get('/api/user/:id', UserController.getUser)
    app.put('/api/user/:id', UserController.updateUser)
    app.delete('/api/user/:id', UserController.deleteUser)
    app.get('/api/auth', authenticate, UserController.getLoggedUser)

    //User Discussion routes
    app.get('/api/user/:id/discussions', UserController.getAllDiscussions);

    //Discussion routes
    app.post('/api/discussion/:userId/new', DiscussionController.createDiscussion);
    app.get('/api/discussion', DiscussionController.getAllDiscussions);
    app.get('/api/discussion/:id', DiscussionController.getDiscussion)
}