const DCSport = artifacts.require("DCSport");
const Match = artifacts.require("Match");

var dcsportInstance;
var matchInstance;

contract("Positive test", function(accounts) {

	it("DCSport deployment", function() {
		return DCSport.deployed().then(function (instance) {
			dcsportInstance = instance;
			assert(dcsportInstance !== undefined, "DCSport should be defined")
		});
	});

	it("Match deployment", function() {
		return Match.deployed().then(function (instance) {
			matchInstance = instance;
			assert(matchInstance !== undefined, "Match should be defined")
		});
	});

})