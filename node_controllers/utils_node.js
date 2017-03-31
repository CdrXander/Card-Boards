var app = require('./../server.js');

module.exports = {
	handleReturn:handleReturn
};

function handleReturn(function_name,err, result, response) {
	if(!err) {
		response.status(200).send(result);
	} else {
		console.log("Error in " + function_name);
		console.log(err);
		response.status(500).send(err);
	}
}