'use strict';

// Clé API TEXT de Microsoft, mais je crois que maintenant c'est inclu dans API VISION
//var text_api_key = "0ed0b17f35dd4a80b53ba50731668f85";

var vision_api_key = "746202e68e074d51983b4e8e4a95ff7a";
var vision_api_url = "https://westeurope.api.cognitive.microsoft.com/vision/v2.0/";

exports.test_text = function(req, res) {
	res.json({ message: 'Test Text OK' });
};

//je crois que la route par defaut de vision, si on met un menu elle dit juste qu'il y a un menu, donc c'est juste une detection
exports.detect_text = function(req, res) {
  res.json({ message: 'Detect text TODO' });
};

exports.read_text = function(req, res) {
  res.json({ message: 'Read text TODO' });
};
