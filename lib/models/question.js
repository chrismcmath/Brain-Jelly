'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
// Schema
var QuestionSchema = new Schema({
  question: String,
  author: String
});

// Validations
QuestionSchema.path('question').validate(function (str) {
  return str != "";
}, 'Question cannot be empty');

mongoose.model('Question', QuestionSchema);
