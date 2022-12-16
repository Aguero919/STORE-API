const mongoose = require("mongoose");

const ProductsSChema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Product name must be provided"],
    },
    price: {
        type: Number,
        required: [true, "Product Price must be provided"],
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 4.5,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        enum: {  // custom error message to send when values provided don't match
            values: [ "ikea", "liddy", "caressa", "marcos" ],
            message: '{VALUE} is not supported',
        }
        // enum: ["ikea", "liddy", "caressa", "marcos"],   // permits only those values
    },
});

module.exports = mongoose.model("Products", ProductsSChema);