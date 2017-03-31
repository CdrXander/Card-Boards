var app 	= require('./../server.js');
var utils	= require('./utils_node.js');
var db 		= app.get('db');


module.exports = {
	getProductById:getProductById,
	getProductList:getProductList,
	getProductGallery:getProductGallery,
	updateProduct:updateProduct
}

function getProductById(id) {
	db.product.findOne({id:id}, function(product, err) {
		utils.handleReturn("productNode.getProductById",product, err, res);
	});
}

function getProductList() {
	db.product
}

function getProductGallery() {

}

function updateProduct() {

}