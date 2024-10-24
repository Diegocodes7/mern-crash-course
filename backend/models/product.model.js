import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }, 
}, {
    timestamps: true // they create a createdAt, updatedAt on each file
});

const Product = mongoose.model('Product', productSchema);
// products

export default Product;