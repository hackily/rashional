const express = require('express');
const router = express.Router();
const imageController = require('../controller/imageController');

router.use(function(req,res,next){
  next(); // console.log('index.html from router - index.js');
});

//Post picture to clarifai api, which will return classification.
//Also pass in longitude/latitude
router.post('/api/predict', imageController.predictSingleImage);



module.exports = router;
