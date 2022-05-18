const ProductController = require('../controllers/products.controller');
module.exports = function(app){
    app.get('/api', ProductController.index);
    app.post('/api/product', ProductController.createPruduct);
    app.get('/api/product', ProductController.getAllProducts);
    app.get('/api/product/:id', ProductController.getOneProduct);
    app.put('/api/product/:id', ProductController.updateProduct);
    app.delete('/api/product/:id', ProductController.deleteProduct);
}