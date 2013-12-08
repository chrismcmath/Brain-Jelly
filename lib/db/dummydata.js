'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing'),
    Question = mongoose.model('Question'),
    Answer = mongoose.model('Answer'),
    Noun = mongoose.model('Noun');

//var Lazy=require("lazy");

//Clear old things, then add things in
Thing.find({}).remove(function() {
	Thing.create({ 
		name : 'HTML5 Boilerplate',
		info : 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.',
		awesomeness: 10
	}, {
		name : 'AngularJS',
		info : 'AngularJS is a toolset for building the framework most suited to your application development.',
		awesomeness: 10
	}, {
		name : 'Karma',
		info : 'Spectacular Test Runner for JavaScript.',
		awesomeness: 10
	}, {
		name : 'Express',
		info : 'Flexible and minimalist web application framework for node.js.',
		awesomeness: 10
	}, {
		name : 'MongoDB + Mongoose',
		info : 'An excellent document database. Combined with Mongoose to simplify adding validation and business logic.',
		awesomeness: 10
	}, function(err) {
			console.log('finished populating things');
		}
	);
});

Question.find({}).remove(function() {
	Question.create({ 
		question : 'How would you build a spaceship using',
		author : 'me',
        isActive: true
	}, {
		question : 'How could you bring down the goverment with just',
		author : 'you'
	}, {
		question : 'How might you win a marathon with',
		author : 'them'
	}, function(err) {
			console.log('finished populating things');
		}
	);
});

/*
new Lazy(process.stdin)
    .lines
    .forEach(
	function(line) 
	{ 
	    console.log(line.toString()); 
	}
    );
process.stdin.resume();
*/

Noun.find({}).remove(function() {
    // Read the file and print its contents.
    var fs = require('fs'), filename = "words/scribblenaut_words.txt";
    require('fs').
    readFileSync('words/scribblenaut_words.txt').toString().
    split('\n').forEach(
        function (line) {
            var answer = line.toLowerCase();
            if (isVowel(answer[0])) {
                answer = 'an ' + answer;
            } else {
                answer = 'a ' + answer;
            }
            Noun.create({ 
                noun : answer
            }, function(err) {
                if (err) console.log('error loading word list ' + err);
                }
            );
        }); 
    });

    function isVowel(c) {
        return ['a', 'e', 'i', 'o', 'u'].indexOf(c) !== -1
    }
