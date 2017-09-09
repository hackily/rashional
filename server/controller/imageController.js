'use strict'
//const express = require('express');
const Clarifai = require('clarifai');
const modelId = process.env['rashionalModelId'];
const logger = require('winston');
const rashPrediction = require('../model/rashPrediction');

const ai = new Clarifai.App({
  apiKey: process.env['clarifaiAPIKey']
});

//Receive picture from frontend as base64, as well as latitude/longitude in body.
exports.predictSingleImage = function(req, res, next) {
  const base64Image = req.body.base64Image;
  ai.models.predict(modelId, {base64: base64Image}).then(
    function(response) {
      const models = generateRashPredictionModels(req, response);
      res.json(models[0]);
    },
    function(err) {
      logger.error("Error: " + err.data.status.details);
      throw new Error(err);
    }
  );
};

//Takes numPictures and rashType, returns object with pictures and their URLs
exports.getRashPictures = function(req, res, next) {
  const numberOfImages = req.query.numImages;
  const rashType = req.query.rashType;
  ai.inputs.search(
    [{
      concept: {
        id: rashType,
        type: 'input',
      }
    }],
    {
      perPage: numberOfImages
    }).then(function(data){
      res.send(data.hits);

  })



}

//Assume same latitude and longitude, even if there are multiple pictures.
function generateRashPredictionModels(req, response) {
  const longitude = req.body.longitude;
  const latitude = req.body.latitude;
  let modelArr = [];
  for(let n = 0; n < response.outputs.length; n++) {
    let prediction = response.outputs[n];
    //Create model.
    let modelData = {
      "url": prediction.input.data.image.url,
      "isBase64": prediction.input.data.image.base64,
      "latitude": latitude,
      "longitude": longitude,
      "timestamp": new Date().getTime()
    };
    //Insert each new concept into the model data
    let predictionName = '';
    let predictionVal = 0;
    for(let m = 0; m < prediction.data.concepts.length; m++) {
      let concept = prediction.data.concepts[m];
      let afflictionName = concept.name;
      let afflictionValue = concept.value;
      if(afflictionValue > predictionVal){ //Track the highest value, which is our prediction
        predictionVal = afflictionValue;
        predictionName = afflictionName;
      }
      modelData[afflictionName] = concept.value;
    }
    modelData.prediction = predictionName;
    modelData.predictionValue = predictionVal;
    const model = new rashPrediction.rashPrediction(modelData);
    modelArr.push(model);
    model.save((err) => {
      logger.error(err);
    });
  }
  return modelArr;
}

function formatSingleResponse(response){
  const predictions = response.outputs[0].data.concepts; //Array containing concepts, containing name, id, value
  const imgObj = predictions.outputs[0].input.image; //base64 and url
  return {
    "predictions": predictions,
    "image": imgObj
  };
}