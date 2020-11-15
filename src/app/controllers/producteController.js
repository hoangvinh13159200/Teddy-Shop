const Producte = require('../models/Product')
const { mongooseToObject } = require('../../util/mongoose');

class producteController {
	    // [GET] /producte/:slug
		show(req, res, next) {
			Producte.findOne({ slug: req.params.slug })
				.then((producte) =>
					res.render('producte/show', {
						producte: mongooseToObject(producte),
					}),
				)
				.catch(next);
		}
		
		//[Get]/create
		create(req, res, next){
			res.render('producte/create')
		}

		// [POST] /producte/store
		store(req, res, next) {
			// req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
			const producte = new Producte(req.body);
			producte
				.save()
				// .then(() => res.redirect('/me/stored/courses'))
				.catch((error) => {});
		}
}

module.exports = new producteController()