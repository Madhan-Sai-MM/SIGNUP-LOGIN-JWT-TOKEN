const mongoose = require("mongoose");
const { Schema } = require('mongoose')

const studSchema = new Schema({
  name: {
    type: String,
    required: true, //mandatory field
  },
  rollNumber: {
    type: String
  },
  standard: {
    type: String
  },
  section: {
    type: String
  },
  photoURL: {
    type: String
  },
  address: {
    line1: String,
    line2: String,
    city: String,
    state: String,
    country: String
  },
  parents: {
    type: [String]
  }
})

//Map mongodb collection to the Schema created above. .model returns an obj using which we can perform all operations in studModel colection
const studentModel = mongoose.model('studModel', studSchema)
module.exports = studentModel