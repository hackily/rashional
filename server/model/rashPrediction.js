'use strict'
const mongoose = require('mongoose');
const rashPredictionSchema = mongoose.Schema({
  id: String,
  url: String,
  isBase64: Boolean,
  disease: [
    {
      name: String,
      value: Number
    }
  ],
  latitude: Number,
  longitude: Number,
  prediction: String,
  predictionValue: Number,
  timestamp: Number
});

const rashPrediction = mongoose.model('RashPrediction', rashPredictionSchema);


module.exports = {
  "rashPrediction": rashPrediction
};