const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title must be 3 or more characters"]
    },

    price: {
        type: String,
        required: [true, "Price is required"],
        minlength: [4, "Price must be at least 4 characters long"]
    },

    description: {
        type: String,
        minlength: [5, "description must be more than 5 characters"]
    }
}, { timestamps: true });



module.exports.Product = mongoose.model('Product', ProductSchema);
