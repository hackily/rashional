'use strict'
const express = require('express');
const router = express.Router();
const imageController = require('../controller/imageController');

router.use(function(req,res,next){
  next(); // console.log('index.html from router - index.js');
});


//Post picture to clarifai api, which will return classification.
//Also pass in longitude/latitude

/**
 * @api {post} /api/post/predict Predict Single Image
 * @apiName predictSingleImage
 * @apiGroup Predict
 * 
 * @apiParam {String} base64Image An image in base64 format.
 * @apiParam {Number} latitude Optional
 * @apiParam {Number} longitude Optional
 * @apiDescription
 *   Latitude and Longitude will be returned back in the response if they are present.
 * 
 * @apiSuccess {Object} foo
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *       {
 *        "url": "https://s3.amazonaws.com/clarifai-api/img2/prod/small/ce624aa372f2461bbff7dc3523c701f2/d7a154589c8a4788b4b13fff667de22f",
 *        "isBase64": true,
 *        "timestamp": 1504963997833,
 *        "Ringworm": 0.5087677,
 *        "Lyme Disease": 0.49123228,
 *        "prediction": "Ringworm",
 *        "predictionValue": 0.5087677,
 *        "latitude": 0,
 *        "longitude": 0,
 *        "_id": "59b3ed9d39be26ae69079e01"
 *      }
 */
router.post('/api/post/predict', imageController.predictSingleImage);

//Take numPicture, rashType, and return pictures
/**
 * @api {get} /api/get/rashPictures Get Rash Pictures
 * @apiName getRashPictures
 * @apiGroup getPictures
 * @apiParam {Number} Number of pictures requested. Defaults to 5;
 * @apiParam {String} rashId Required parameter. Example: "Lyme Disease"
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *       [
 *         {
 *             "score": 1,
 *             "input": {
 *                 "id": "b895eed662e443c1849b7fc337f014ef",
 *                 "data": {
 *                     "image": {
 *                         "url": "https://s3.amazonaws.com/clarifai-api/img2/prod/small/ce624aa372f2461bbff7dc3523c701f2/bd0132d664a944c4afba9d732313672d"
 *                     },
 *                     "concepts": [
 *                         {
 *                             "id": "Ringworm",
 *                             "name": "Ringworm",
 *                             "value": 1,
 *                             "app_id": "ce624aa372f2461bbff7dc3523c701f2"
 *                         }
 *                     ],
 *                     "metadata": {}
 *                 },
 *                 "created_at": "2017-09-06T23:45:01.317918Z",
 *                 "modified_at": "2017-09-06T23:45:01.454412Z",
 *                 "status": {
 *                     "code": 30000,
 *                     "description": "Download complete"
 *                 }
 *             }
 *         }
 *         ...
 *       ]
 */
router.get('/api/get/rashPictures', imageController.getRashPictures);


module.exports = router;
