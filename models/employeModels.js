const mongoose = require("mongoose");
const { Schema } = require('mongoose')

const empSchema = new Schema({
  name: {
    type: String,
    required: true, //mandatory field
    maxLength: 25,
    unique: true //to accept a name only once
  },
  jobName:{
    type: String
  },
  hireDate:{
    type:Date
  },
  salary: {
    type: Number,
  }
})

//Map mongodb collection to the Schema created above. .model returns an obj using which we can perform all operations in movie colection
const empModel = mongoose.model('empdata2', empSchema)
module.exports = empModel