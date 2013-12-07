'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
// Schema
var AnswerSchema = new Schema({
  answer: String,
  author: String,
  q_id: String,
  date: {type: Date, default: Date.now()}
});

// Validations
AnswerSchema.path('answer').validate(function (str) {
  return str != "";
}, 'Answer cannot be empty');

mongoose.model('Answer', AnswerSchema);
