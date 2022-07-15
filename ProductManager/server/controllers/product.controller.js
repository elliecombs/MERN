//Import models
const { find } = require("../models/product.models");
const Product = require("../models/product.models");
//Send from Express with function

//GET/FIND ALL 
module.exports.getAllProduct = (req, res) => {
//Promise function/Route capability 
    Product.find()
        //then success: get all jokes
        .then((allProduct) => res.json(allProduct))
        //catch errors 
        .catch((err) => {
            res.status(400).json({ message: 'There is an error finding all', error: err})
});}

//CREATE NEW
module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
    .then(brandNewProduct => res.json(brandNewProduct))
    .catch((err) => {
        res.status(400).json({ message: 'There is an error creating a new product', error: err})
});}

//GET ONE/BY ID
module.exports.findOneProduct = (req, res) => {
    Product.findOne({_id: req.params.id}) 
    .then(findOneProduct => {
        console.log(findOneProduct)
        if (!findOneProduct) {
            res.status(400).json({ message: 'Find one product came back as null'})
        }
        else{ res.json(findOneProduct)
        }
    })
    .catch((err) => {
        console.log("I messed up")
        res.status(400).json({ message: 'There is an error finding one', error: err})
});}

//UPDATE
module.exports.updateOneProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updateProduct => {
            res.json({ joke: updateProduct })
        })
        .catch((err) => {
            res.status(400).json({ message: 'There is an error updating this product', error: err })
        });}

//DELETE
module.exports.deleteOneProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
    .then(result => {
        res.json({ result: result})
    })
    .catch((err) => {
        res.status(400).json({ message: 'There is an error in the deleting of this product', error: err})
    });}
