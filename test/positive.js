const DCSport = artifacts.require("DCSport");

var dcsportInstance;

contract("Positive test", function(accounts) {

	var bookmaker = accounts[0];
	var bettor1 = accounts[1];
	var bettor2 = accounts[2];

	it("DCSport deployment", function() {
		return DCSport.deployed()
		.then(function (instance) {
			dcsportInstance = instance;
			assert(dcsportInstance !== undefined, "DCSport should be defined")
		});
	});

	it("Add a match", async function() {
		var dt = new Date();
        var unixStartTime = Math.floor(dt.getTime() / 1000 + (60 * 60 * 24 * 3))

        await dcsportInstance.addMatch("PSG", "OL", unixStartTime, true, {from: bookmaker});

        assert((await dcsportInstance.matches(0)).opponent1 === "PSG");
        assert((await dcsportInstance.matches(0)).opponent2 === "OL");
		assert((await dcsportInstance.matches(0)).startTime.toNumber() === unixStartTime);
		assert((await dcsportInstance.matches(0)).acceptDraw === true);
	});

	it("Bet", async function() {
        await dcsportInstance.bet(0, 1, 10, {from: bettor1});

        console.log(await (await dcsportInstance.matches(0)).bets[1])

        assert((await (await dcsportInstance.matches(0)).bets[1])[bettor1] === 10);
	});

	it("Bet 2", async function() {
        await dcsportInstance.bet(0, 2, 20, {from: bettor1});

	});

	it("Publish result", async function() {

	});

	it("Add Match", async function() {

	});

	it("Bet 3", async function() {

	});

	it("Cancel", async function() {
		
	});

})