// import model for "db" manipulation
const Products = require("../model/products");

const getAllProductsStatic = async (req, res) => {
    const response = await Products.find();
    res.status(200).json( { success: true, nBHits: response.length , data: response } );
};

const getAllProducts = async (req, res) => {
    const { name, featured, company } = req.query;
    // stores all queries if "truthy"
    const queryObject = {  };
    
    if(name) {
        queryObject.name = { $regex: name, $options: 'i' };
    }
    if(featured) {
        queryObject.featured = featured;
    }
    if(company) {
        queryObject.company = { $regex: company, $options: 'i'} 
    }


    const response = await Products.find(queryObject);
    res.status(200).json( { success: true,nBHits: response.length, data: response } );
};

module.exports = { getAllProductsStatic, getAllProducts };