var express = require('express');
var router = express.Router();
const postModels = require('../models/post');
const Post = postModels.Post;

//to get all posts
	router.get('/all', function (request, response) {
			Post.getAll(request, response);
		});

//to get a single post by id
	router.get('/:postId', function (request, response) {
		Post.getById(request, response);
	});
	
//to create a post	
	router.post('/create', function (request, response) {
		Post.setPost(request, response);
	});

//to get all posts by a specific user
	router.get('/all/user/:user', function (request, response) {
		Post.getAllByUser(request, response);
	});

//to get all posts relating to specific organisation
	router.get('/all/org/:organisationName', function (request, response) {
		Post.getAllByOrg(request, response);
	});	

//to clear model
	router.delete('/all', function(request, response){
		Post.deleteAll(request, response);
	});

//to delete a post by ID
	router.delete('/:postId', function (request, response) {
		Post.deleteById(request, response);
	});

//to increment vote count on post
	router.post('/vote/up/:postId', function(request, response){
		Post.setVoteUp(request, response);
	});

//to decrement vote count on post
	router.post('/vote/down/:postId', function(request, response){
		Post.setVoteDown(request, response);
	});

//to add tag to post
	router.post('/tag/add/:postId', function(request, response){
		Post.addTag(request, response);
	});

//to remove tag from post
	router.post('/tag/remove/:postId', function(request, response){
		Post.removeTag(request, response);
	});

module.exports = router;
