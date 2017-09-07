const express = require('express');
const router = express.Router();

router.use(function(req,res,next){
  next(); // console.log('index.html from router - index.js');
});

router.post('/api/identify', function(req, res, next){
  //Post picture to clarifai api, which will return classification.
});

router.post('/api/train', function(req, res, next){
  //Post picture to clarifai api, to feed it.
});

router.post('/api/location', function(req, res, next){
  //Provide client's location to backend. Save and record in a geographic map.
  //Return heatmap value of rash/disease.
});

module.exports = router;
