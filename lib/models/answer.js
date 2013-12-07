'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
// Schema
var AnswerSchema = new Schema({
  question: String,
  author: String
});

// Validations
AnswerSchema.path('question').validate(function (str) {
  return str != "";
}, 'Answer cannot be empty');

mongoose.model('Answer', AnswerSchema);
