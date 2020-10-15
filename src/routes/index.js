
function route(app){
    app.get('/China', (req, res)=>{
        res.render('China')
    })
    app.get('/', (req, res)=>{
        res.render('home')
    })
}

module.exports = route