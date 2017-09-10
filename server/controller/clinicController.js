'use strict'
const logger      = require('winston');
const Clinic      = require('../model/clinic');
const _           = require ('lodash');
const axios       = require('axios');
const querystring = require('querystring');

//Receive picture from frontend as base64, as well as latitude/longitude in body. Check api docs
exports.getClinics = function(req, res, next) {
  const latitude = req.query.latitude;
  const longitude = req.query.longitude
  if(!latitude || !longitude){
    const err = new Error("You must provide a valid latitude or longitude!");
    err.status = 500;
    return next(err);
  }
  //const url = 'https://www.pparx.org/prescription_assistance_programs/free_clinic_finder/json?latitude' + latitude + '?longitude'
  axios.get('https://www.pparx.org/prescription_assistance_programs/free_clinic_finder/json', {
    params: {
      'lat': latitude,
      'lng': longitude
    }
  })
  .then( (response) => {
    let clinicList = [];
    _.each(response.data, (facilityObj) => {
      clinicList.push(parseClinicResponse(latitude, longitude, facilityObj));
    })
    res.send(clinicList);
  })
  .catch((err) => {
    next(err);
  });
};

function parseClinicResponse(latitude, longitude, data){
  const dataObj = {
    name: data.name,
    latitude: data.lat,
    longitude: data.lng,
    address: {
      address: data.address.address,
      locality: data.address.locality,
      postal_code: data.address.postal_code,
      country: data.address.country,
    },
    clinic_type: data.clinic_type,
    phone: data.phone,
    distanceFromUser: distance(latitude, longitude, data.lat, data.lng),
    distanceUnits: "imperial",
    url: data.url ? data.url.url : null
  }
  return new Clinic.clinic(dataObj);  
};

function distance(lat1, lon1, lat2, lon2, unit) {
  const radlat1 = Math.PI * lat1/180;
  const radlat2 = Math.PI * lat2/180;
  const theta = lon1-lon2;
  const radtheta = Math.PI * theta/180;
  let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  dist = Math.acos(dist);
  dist = dist * 180/Math.PI;
  dist = dist * 60 * 1.1515;
  if (unit=="K") { dist = dist * 1.609344 };
  if (unit=="N") { dist = dist * 0.8684 };
  return dist;
};
