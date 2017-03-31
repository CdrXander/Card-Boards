var app = require('./../server.js');

module.exports = {
	handleReturn:handleReturn
}

function handleReturn(function_name, result, response) {
	if(!err) {
		
	} else {
		console.log("Error in " + method_name);
		console.log(err);
		res.status(500).send(err);
	}
}