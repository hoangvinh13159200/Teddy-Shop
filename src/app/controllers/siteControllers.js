const Producte = require('../models/Product')
const Local = require('../models/Local')
// const User = require('../models/User')
class siteController{


    home(req, res, next){
		Producte.find({})
			.then((productes)=>{
				productes: productes
				productes = productes.map(productes => productes.toObject())
				res.render('home', {productes})
			}
			)
			.catch(next);
	}
	
}

module.exports = new siteController()