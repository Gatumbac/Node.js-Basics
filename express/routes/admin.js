const express = require('express');
const path = require('path');
const dirName = require("../utils/path");

const router = express.Router();

const products = [];

// /admin/add-product

router.get('/add-product', (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Add Product', 
        path: '/admin/add-product',
    })
});

router.post('/add-product', (req, res) => {
    const product = req.body;
    products.push(product);
    res.redirect('/');
}); 

exports.routes = router;
exports.products = products;