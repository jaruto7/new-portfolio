const express = require('express');
const bodyParser = require('body-parser');
const expressHandlebars = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();



//Static folder
app.use('/css', express.static(path.join(__dirname, 'css')));

// Body Parser Middleware
app.use(bodyParser.urlencoded({
 extended: false
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
 res.render('index');
});

app.listen(3000, () => console.log('Server started...'));