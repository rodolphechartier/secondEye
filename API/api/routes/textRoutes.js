'use strict';
module.exports = function(app) {

	var text = require('../controllers/textController');

	// text Routes

	//Route test
	app.route('/TestText')
		.get(text.test_text);

	//Route de détection de texte
	app.route('/detectText')
		.post(text.detect_text);

	//Route de lecture de texte
	app.route('/readText')
		.post(text.read_text);
};
