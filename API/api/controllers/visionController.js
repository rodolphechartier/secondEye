'use strict';

var vision_api_key = "746202e68e074d51983b4e8e4a95ff7a";
var vision_api_url = "https://westeurope.api.cognitive.microsoft.com/vision/v2.0/";

exports.test_vision = function(req, res) {
  res.json({ message: 'Test Vision OK' });
};

exports.get_landscape = function(req, res) {
  res.json({ message: 'Test Vision OK' });
};

exports.get_outdoors = function(req, res) {
  res.json({ message: 'Get outdoors TODO' });
};

exports.get_indoors = function(req, res) {
  res.json({ message: 'Get indoors TODO' });
};
