'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing'),
    Question = mongoose.model('Question'),
    Answer = mongoose.model('Answer'),
    Noun = mongoose.model('Noun');

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
		question : 'How long is a piece of string',
		author : 'me'
	}, {
		question : 'How to build something silly',
		author : 'you'
	}, {
		question : 'How can you dive without wheels',
		author : 'them'
	}, function(err) {
			console.log('finished populating things');
		}
	);
});

Noun.find({}).remove(function() {
	Noun.create({ 
		noun : 'apple'
	}, {
		noun : 'banana'
	}, {
		noun : 'cat'
	}, function(err) {
			console.log('finished populating things');
		}
	);
});
