/**
 * Created by Xander on 4/1/2017.
 */
var app 	= require('./../server.js');
var utils	= require('./utils_node.js');
var db 		= app.get('db');

module.exports = {
	createSaleRecord:createSaleRecord,
	updateOrder:updateOrder,
	getSalesList:getSalesList,
	getOrderList:getOrderList,
	getOpenOrders:getOpenOrders
};

function createSaleRecord(req, res) {

	var saleRecord = {
		paypal_transaction_id: req.body.paypal_transaction_id,
		customer_name:req.body.customer_name,
		customer_email:req.body.customer_email,
		product_id:req.body.product_id
	};
	db.sale.insert(saleRecord, function (err, newSale) {

		var orderRecord = {
			sale_id:newSale.id,
			status_id:1
		};
		db.cb_order.insert(orderRecord, function (err, newOrder) {
			utils.handleReturn("saleNode.createSaleRecord", err, newOrder,res)
        });
    });
}

function updateOrder(req, res) {
	var updatedOrder = {
		id:req.body.id,
		status_id:req.body.status_id
	};

	db.cb_order.update(updatedOrder, function(err, updatedOrder) {
		utils.handleReturn("saleNode.updateOrder",err,updatedOrder,res);
	});
}

function getSalesList(req, res) {
	db.run("SELECT * FROM sale", function (err, result) {
		utils.handleReturn("saleNode.getSalesList",err,result,res);
    });
}

function getOrderList(req, res) {
	db.run("SELECT * FROM cb_order", function(err, orderList) {
		utils.handleReturn("saleNode.getOrderList",err,orderList,res);
    });
}

function getOpenOrders(req, res) {
	db.get_open_orders({},function(err, openOrders) {
		utils.handleReturn("saleNode.getOpenOrders",err, openOrders,res);
	});
}
