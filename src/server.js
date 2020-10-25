const express = require("express")
const exphbs = require('express-handlebars')
const morgan = require('morgan');
const methodOverride = require('method-override');
const path = require('path')
const app = express()
const route = require('./routes/index')
const mongoose = require('mongoose');
const port = 3000
const db = require('./config/db/index')

db.connect()

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(methodOverride('_method'));
//app.use(morgan('combined'))


app.set('views', path.join(__dirname, 'resources' ,'views'))
app.use(express.static(path.join(__dirname, './public')))

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

route(app)

app.listen(port, ()=>{
    console.log(`App listening at http://localhost:${port}`)
})