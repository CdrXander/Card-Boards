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
	var reviewData = {
		product_id:req.body.product_id,
		rating:req.body.rating,
		review_text:req.body.review_text,
		author_name:req.body.author_name,
	};
	db.product_review.insert(reviewData, function(err, newReview) {
		utils.handleReturn("reviewNode.createReview",err,newReview,res);
	});
}

function getReviewById(req, res) {
	db.product_review.findOne({id:req.params.id}, function (err,review) {
		utils.handleReturn("reviewNode.getReviewById",err,review,res);
    });
}

function getReviewList(req, res) {
	db.run("SELECT * FROM product_review", function(err, reviewList) {
		utils.handleReturn("reviewNode.getReviewList",err, reviewList, res);
	});
}
