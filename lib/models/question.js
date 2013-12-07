'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
// Schema
var QuestionSchema = new Schema({
  question: String,
  author: {type: String, default: "none"},
  date: {type: Date, default: Date.now()},
  isActive: {type: Boolean, default: false}
});

// Validations
QuestionSchema.path('question').validate(function (str) {
  return str != "";
}, 'Question cannot be empty');

mongoose.model('Question', QuestionSchema);
