'use strict';

var face_api_key = "a81e3ac9d45b4406a68e4d3cd4898c6b";
var face_api_key = "https://westeurope.api.cognitive.microsoft.com/face/v1.0/";

exports.test_faces = function(req, res) {
  res.json({ message: 'Test face OK' });
};

exports.get_faces = function(req, res) {
  res.json({ message: 'Test face OK' });
};

exports.get_emotions = function(req, res) {
  res.json({ message: 'Test face OK' });
};

exports.add_face = function(req, res) {
  res.json({ message: 'Test face OK' });
};

exports.get_added_face = function(req, res) {
  res.json({ message: 'Test face OK' });
};
