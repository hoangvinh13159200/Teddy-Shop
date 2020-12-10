class cartController{
    cart(req, res){
        res.render('cart')
    }
}
module.exports = new cartController()