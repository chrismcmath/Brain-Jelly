'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing'),
    Question = mongoose.model('Question'),
    Answer = mongoose.model('Answer'),
    Noun = mongoose.model('Noun'),
    async = require('async');

exports.question = function(req, res) {
  //res.send('this is exporting questions');
  return Question.find(function (err, questions) {
    if (!err) {
      return res.json(questions);
    } else {
      return res.send(err);
    }
  });
};

exports.random_question = function(req, res) {
  res.send('this is a random question');
};

exports.answers = function(req, res) {
  res.send('this is exporting answers');
};

exports.nouns = function(req, res) {
  return Noun.find(function (err, nouns) {
    if (!err) {
      return res.json(nouns);
    } else {
      return res.send(err);
    }
  });
};

exports.awesomeThings = function(req, res) {
  return Thing.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};
