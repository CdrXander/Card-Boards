/**
 * Created by Xander on 3/21/2017.
 */
var app 	= require('./../server.js');
var utils	= require('./../node_controllers/utils_node.js');
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