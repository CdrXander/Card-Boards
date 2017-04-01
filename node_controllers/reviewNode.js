/**
 * Created by Xander on 4/1/2017.
 */
var app 	= require('./../server.js');
var utils	= require('./utils_node.js');
var db 		= app.get('db');

module.exports = {
	createReview:createReview,
	getReviewById:getReviewById,
	getReviewList:getReviewList
};

function createReview(req, res) {
	res.status(501).send("TO BE IMPLEMENTED")
}

function getReviewById(req, res) {
	res.status(501).send("TO BE IMPLEMENTED")
}

function getReviewList(req, res) {
	res.status(501).send("TO BE IMPLEMENTED")
}
