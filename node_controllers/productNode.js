/**
 * Created by Xander on 3/21/2017.
 */
var app 	= require('./../server.js');
var utils	= require('./utils_node.js');
var db 		= app.get('db');


module.exports = {
    getProductById:getProductById,
    getProductList:getProductList,
    getProductGallery:getProductGallery,
    updateProduct:updateProduct
};

function getProductById(req, res) {
    db.product.findOne({id:req.params.id}, function(err, product) {
        utils.handleReturn("productNode.getProductById",err, product, res);
    });
}

function getProductList(req, res) {
    db.run("SELECT * FROM product", function (err, productList) {
        utils.handleReturn("productNode.getProductList",err,productList, res);
    });
}

function getProductGallery(req, res) {
    db.run("SELECT p.id, p.image_url FROM product p", function(err, gallery) {
        utils.handleReturn("productNode.getProductGallery",err,gallery,res);
    });
}

function updateProduct(req, res) {

    var data = {
        id:req.body.id,
        sku:req.body.sku,
        name:req.body.name,
        description:req.body.description,
        image_url:req.body.image_url,
        price:req.body.price,
        item_qty:req.body.item_qty,
        discount:req.body.discount,
        shipping:req.body.shipping
    };

    db.product.update(data, function(err, updatedProduct) {
        utils.handleReturn("productNode.updateProduct",err,updatedProduct,res);
    });
}