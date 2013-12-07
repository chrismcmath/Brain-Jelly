'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing'),
    Question = mongoose.model('Question'),
    Answer = mongoose.model('Answer'),
    Noun = mongoose.model('Noun'),
    async = require('async');

exports.question = function(req, res) {
  //res.send('this is exporting questions');
    return Question.find(
            //seem to be having a date problem here
            //{"date": {"$gte": new Date(2013, 11, 8)}},
            {"isActive": true},
            function (err, question) {
                if (!err) {
                    return res.json(question);
                } else {
                    return res.send(err);
                }
            });
};

exports.random_question = function(req, res) {
  res.send('this is a random question');
};

exports.answers = function(req, res) {
    return Answer.find(
            {"q_id": req.params.id},
            function (err, answers) {
                if (!err) {
                    return res.json(answers);
                } else {
                    return res.send(err);
                }
            });
};

exports.nouns = function(req, res) {
  return Noun.find(function (err, nouns) {
    if (!err) {
        var inA = Math.floor(Math.random() * nouns.length);
        var inB = Math.floor(Math.random() * nouns.length);
        //If it's the same word, just bump the latter up/down
        if (inA == inB) {
            if (inB == nouns.length -1) inB--;
            else inB++;
        }
        var pair = [nouns[inA], nouns[inB]];
      return res.json(pair);
    } else {
      return res.send(err);
    }
  });
};

exports.post_answer = function(req, res) {
    console.log("answer: " + req.body.answer);
    console.log("id: " + req.body.q_id);
	Answer.create({ 
		answer : req.body.answer,
		author : '?',
        q_id: req.body.q_id,
        date : Date.now()
	}, function(err) {
			console.log('Error when adding answer: ' + err);
		}
	);
    res.redirect('/answers/' + req.body.q_id);
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
