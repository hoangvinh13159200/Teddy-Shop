const chinaRouter = require('./chinaRouter')

function route(app){
    app.use('/china', chinaRouter)
    app.get('/', (req, res)=>{
        res.render('home')
    })
}

module.exports = route