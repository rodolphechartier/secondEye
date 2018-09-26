'use strict';

var vision_api_key = "746202e68e074d51983b4e8e4a95ff7a";
var vision_api_url = "https://westeurope.api.cognitive.microsoft.com/vision/v2.0/";

exports.test_vision = function(req, res) {
  res.json({ message: 'Test Vision OK' });
};

exports.get_landscape = function(req, res) {
    const params = {
        'visualFeatures': 'Categories,Description,Color',
    };
    const sourceImageUrl = req.body.url;

    const options = {
        uri: vision_api_url + '/analyze',
        qs: params,
        body: '{"url": ' + '"' + sourceImageUrl + '"}',
        headers: {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key' : vision_api_key
        }
    };

    request.post(options, (error, response, body) => {
        if (error) {
            res.send(error);
        }

        let data = JSON.parse(body);
        var response = '{"landscapes":[';
        for (var i = 0; i < data["description"]["captions"].length; ++i) {
            var text = data["description"]["captions"][i]["text"];

            if (i)
                response += ','
            response += '{"message": ' + text '}';
        }

        response += ']}'
        response = JSON.parse(response);
        res.json(response);
    });
};

exports.get_outdoors = function(req, res) {
  res.json({ message: 'Get outdoors TODO' });
};

exports.get_indoors = function(req, res) {
  res.json({ message: 'Get indoors TODO' });
};
