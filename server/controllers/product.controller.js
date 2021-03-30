const {Product} = require('../models/product.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

//creating new products
module.exports.createProduct = (request, response) => {
    const {title, price, description} = request.body;
    Product.create({
        title, 
        price,
        description
    })
        .then(product => response.json(product))
        .catch(err => response.status(400).json(err));
}

//finding all products - read the products 
module.exports.getAllProducts = (request, response) => {
    Product.find({})
        .then(product => response.json(product))
        .catch(err => response.json(err))
}

//finding just one product - read one product
module.exports.getProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(product=> response.json(product))
        .catch(err=> response.json(err))
}

//updating a product with db
module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updateProduct => response.json(updateProduct))
        .catch(err => response.json(err))
}

//deleting products
module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}