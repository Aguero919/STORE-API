// we manually populate the db without using another "POST" route
// use "dotenv" one more time to connect to the db

require("dotenv").config();
const connectDB = require("./db/connectDB");

// grab the model
const Products = require("./model/products");

// get the JSON Products
const jsonProducts = require("./products.json");

//connect to the db
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);   //  passing a argument(connectioin uri)
        // remove all the existing datas in the db(optional)
        await Products.deleteMany();
        // then add ell the products to the db at once
        await Products.create(jsonProducts);
        console.log("Success");
        // stops the program with exit codes
        process.exit(0)  //  0 >> stops the code with no failure
    } catch (error) {
        console.log(error);
        process.exit(1);  //  1  >>  stops the code with some failure
    }
};

start();