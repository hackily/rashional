'use strict'
const mongoose = require('mongoose');
const clinicSchema = mongoose.Schema({
  name: String,
  latitude: String,
  longitude: String,
  address: {
    address: String,
    locality: String,
    postal_code: String,
    country: String,
  },
  clinic_type: String,
  phone: String,
  distanceFromUser: Number,
  distanceUnits: String,
  url: String
});

const clinic = mongoose.model('Clinic', clinicSchema);


module.exports = {
  "clinic": clinic
};