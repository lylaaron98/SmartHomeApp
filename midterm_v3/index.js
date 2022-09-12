const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const ejs_layouts = require('express-ejs-layouts');
// const {engine} = require('express-handlebars');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8089;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static('public'));

// app.engine('.hbs', engine({extname: '.hbs'}));

app.set('view engine','ejs');
app.use(ejs_layouts);
app.set('layout','layouts/main');

// app.set('view engine', '.hbs');

app.set('views', './views');

const routes = require('./routes/main');

app.use('/',routes);

app.listen(port,()=>{
    console.log("server runing !");
})


