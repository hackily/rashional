const express = require('express');
const Clarifai = require('clarifai');

const ai = new Clarifai.App({
	apiKey: process.env['clarifaiKey']
});

exports.predictImage = function(req, res, next){
	//Use base64
	ai.models.predict();
}