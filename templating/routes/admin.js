const express = require('express');
const router = express.Router();
const users = [];

router.get('/users', (req, res) => {
    res.render('users', {
        pageTitle: 'Registered Users',
        users: users
    })
});

router.post('/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.redirect('/users');
})

exports.router = router;
exports.data = users;