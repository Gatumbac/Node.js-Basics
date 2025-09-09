const express = require('express');

const router = express.Router();

// /admin/add-product

router.get('/add-product', (req, res, next) => {
    res.send('<form method="POST" action="/admin/add-product"><input type="text" name="title"><Button type="submit">Add Product</Button></form>');
});

router.post('/add-product', (req, res) => {
    console.log(req.body);
    res.redirect('/');
}); 

module.exports = router;