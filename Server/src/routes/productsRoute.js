const {Router}= require('express');
const product = Router();

//const {productId, } = require('../models/Products');

product.get("/", (req, res) => {
  res.send("Hello World");
});

product.post("/", (req, res) => {
  res.send("Producto exitosamente añadido");
})

module.exports = product;