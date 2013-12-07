'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
// Schema
var NounSchema = new Schema({
  noun: String
});

// Validations
NounSchema.path('noun').validate(function (str) {
  return str != "";
}, 'Empty string');

mongoose.model('Noun', NounSchema);
