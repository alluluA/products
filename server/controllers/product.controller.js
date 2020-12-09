const Product = require("../models/product.model");

module.exports.findAllProducts = (req, res) => {
    Product.find()
    .then(allProducts => res.json({products: allProducts}))
    .catch(err => res.json({ message: "Something went wrong", error: err}));
};

module.exports.finedOneProduct = (req, res) => {
    Product.finedOne({ _id: req.params.id })
    .then(oneProduct => res.json({ product: oneProduct }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewProduct = (req, res) => {
    const { title, price, description } = req.body;
    Product.create({
        title,
        price,
        description
    })
    .then(newProduct => res.json({ product: newProduct }))
    .catch(err => res.json({ message: "Something went wrong", error: err}));
};

module.exports.updateProduct = (req, res) => {
    Product.finedOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedProduct => res.json({ product: updatedProduct }))
    .catch(err => res.json({ message: "Something went wrong", error: err}));
};

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result}))
    .catch(err => res.json({ message: "Something went wrong", error: err}));
};