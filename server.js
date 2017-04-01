/**
 * Created by Xander on 3/20/2017.
 */
var express     = require('express');
var session     = require('express-session');
var bodyParser  = require('body-parser');
var cors        = require('cors');
var massive		= require('massive');

var config 		= require('./config.js');
var port 		= config.port;

//Initialize the App    =   =   =   =   =   =   =   =
var app = module.exports = express();
app.use(bodyParser.json());
app.use(session({
	saveUninitialized:true,
	resave: false, 
	secret: config.session.secret,
	cookie: {secure:false, httpOnly:false}
}));
app.use(express.static(__dirname + '/public'));

//DB Connection
var conn =  massive.connectSync({
	connectionString:config.db_connect_string
});

app.set('db',conn);
var db = app.get('db');

//Import Node Controllers
var productNode = require('./node_controllers/productNode.js');
var saleNode	= require('./node_controllers/saleNode');
var reviewNode	= require('./node_controllers/reviewNode.js')

//Custom Middleware
var authCheck = function(req,res,next) {
	next();
};

//END POINTS    =   =   =   =   =   =   =   =   =   =   =   =   =   =

//Products
app.get('/api/product/:id', productNode.getProductById);
app.get('/api/product/list', productNode.getProductList);
app.get('/api/product/gallery', productNode.getProductGallery);
app.put('/api/product', authCheck, productNode.updateProduct);

//Sales
app.post('/api/sale', saleNode.createSaleRecord);
app.post('/api/order', saleNode.createOrderRecord);
app.put('/api/order', authCheck, saleNode.updateOrder);
app.get('/api/sale/list', authCheck, saleNode.getSalesList);
app.get('/api/order/list', authCheck, saleNode.getOrderList);
app.get('/api/order/list/open', authCheck, saleNode.getOpenOrders);

//Reviews
app.post('/api/review', reviewNode.createReview);
app.get('/api/review/:id', reviewNode.getReviewById);
app.get('/api/review/list', reviewNode.getReviewList);


//SPIN UP THE DRIVES    =   =   =   =   =   =   =   =   =   =   =   =
app.listen(port, function() {
    console.log("Server Started at", (new Date()).toTimeString(), "on port", port);
});