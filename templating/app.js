const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const loginRoutes = require('./routes/login');
const adminData = require('./routes/admin');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(loginRoutes);
app.use(adminData.router);

app.use((req, res) => {
    res.status(404).render('404', {
        pageTitle: 'Page Not Found'
    })
});

app.listen(3000);

