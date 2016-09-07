var app = require('../build/js/script.js');

describe("For programming test", function(){
	it("first test", function() {
		// prepare
		var result;
		// act
		result = app.testt(2,5);
		console.log(result);
		// assert
		expect(result).toBe(7);
	});

it("get Max Result", function() {
	var result;
	result = app.getMaxRes();

	expect(result).toBe(21);
});		

it("are there test", function() {

	expect(app.test).toBeDefined();

});

it("test closedModel function", function() {

	expect(app.closedModel).isTrue;

});



});