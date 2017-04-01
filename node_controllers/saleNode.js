/**
 * Created by Xander on 4/1/2017.
 */
var app 	= require('./../server.js');
var utils	= require('./utils_node.js');
var db 		= app.get('db');

module.exports = {
	createSaleRecord:createSaleRecord,
	createOrderRecord:createOrderRecord,
	updateOrder:updateOrder,
	getSalesList:getSalesList,
	getOrderList:getOrderList,
	getOpenOrders:getOpenOrders
}

function createSalesRecord(req, res) {
	res.status(501).send("TO BE IMPLEMENTED")
}

function createOrderRecord(req, res) {
	res.status(501).send("TO BE IMPLEMENTED")
}

function updateOrder(req, res) {
	res.status(501).send("TO BE IMPLEMENTED")
}

function getSalesList(req, res) {
	res.status(501).send("TO BE IMPLEMENTED")
}

function getOrderList(req, res) {
	res.status(501).send("TO BE IMPLEMENTED")
}

function getOpenOrders(req, res) {
	res.status(501).send("TO BE IMPLEMENTED")
}
