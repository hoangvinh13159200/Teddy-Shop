const chinaRouter = require('./chinaRouter')
const loginRouter = require('./loginRouter')
const siteRouter = require('./siteRouter')

function route(app){
    app.use('/china', chinaRouter)
    app.use('users', siteRouter)
    app.use('/login', loginRouter)
    app.use('/', siteRouter)
}

module.exports = route