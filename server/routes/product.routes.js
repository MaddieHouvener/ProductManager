const ProductController = require('../controllers/product.controller');
module.exports = function(app){
    app.get('/', ProductController.index);
    app.post('/product', ProductController.createProduct);
    app.get('/product', ProductController.getAllProducts);
    app.get('/product/:id', ProductController.getProduct);
    app.put('/product/:id', ProductController.updateProduct);
    app.delete('/product/:id', ProductController.deleteProduct);
}
