const express = require("express");
const app = express();

const port = process.env.port || 3000;

// require "dotenv"
require("dotenv").config();

// middleware
app.use(express.urlencoded( {extended: false} ));
app.use(express.json());

// express async-errors
require("express-async-errors");

// import "rooutes" to call "controller" functions
const products = require("./routes/products.");


// base routes
app.get("/", (req, res) => {
    res.status(200).send(`
                            <h1>Products Page</h1>
                            <a href="/api/v1/products">Store products</a>` );
});

// routes
app.use("/api/v1/products", products );

// errors
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/errorHandlerMiddleware");

app.use(notFound);
app.use(errorHandlerMiddleware);

// import coonectDB 
const connectDB = require("./db/connectDB");

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server listening on port ${port}...`);
        })
    } catch (error) {
        console.log(error);
    }
};

start();