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
const { mongooseToObject } = require('./util/mongoose');
const ProducteModel = require('./app/models/Product')
const CommentModel = require('./app/models/Comment')

db.connect()
const BodyParser = require("body-parser");
const { json } = require("body-parser");
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));


app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(methodOverride('_method'));
//app.use(morgan('combined'))

// app.get('/comment', (req, res)=>{
//     res.render('comment')
// })
// app.post('/comment', async (req, res)=>{
//     try {
//         var comment = new CommentModel(req.body);
//         var result = await comment.save();
//         res.send(result);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// })



app.get("/producte/ca-kho-cay", async (request, response) => {
    try {
        var result = await CommentModel.find({})
        comments: result
        comments = result.map(result => result.toObject())
        var productes = await ProducteModel.find({ 'slug': 'ca-kho-cay' })
        productes: productes
        productes = productes.map(productes => productes.toObject())

        producte = productes.concat(comments) 
        producte = Object.assign(producte[0], producte[1], producte[2])
        response.render('producte/show', {producte})
        //response.send({producte})
    } catch (error) {
        response.status(500).send(error);
    }
});
app.set('views', path.join(__dirname, 'resources' ,'views'))
app.use(express.static(path.join(__dirname, './public')))


app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');


route(app)

app.listen(port, ()=>{
    console.log(`App listening at http://localhost:${port}`)
})