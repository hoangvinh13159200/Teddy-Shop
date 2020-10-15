const express = require("express")
const exphbs = require('express-handlebars')
const path = require('path')
const app = express()
const route = require('./routes/index')
const port = 3000

app.set('views', path.join(__dirname, './resources/views'))
app.use(express.static(path.join(__dirname, './public')))

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

route(app)

app.listen(port, ()=>{
    console.log(`App listening at http://localhost:${port}`)
})