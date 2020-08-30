const DCSport = artifacts.require("DCSport");
const ERC20 = artifacts.require("ERC20");

var dcsportInstance;

contract("Positive test", function(accounts) {

	var daiOwner = accounts[0];
	var bookmaker = accounts[1];
	var bettor1 = accounts[2];
	var bettor2 = accounts[3];

	it("DCSport deployment", function() {
		return DCSport.deployed()
		.then(function (instance) {
			dcsportInstance = instance;
			assert(dcsportInstance !== undefined, "DCSport should be defined")
		});
	});

	it("ERC20 deployment and distribution", function() {
		return ERC20.deployed()
		.then(async function (instance) {
			erc20Instance = instance;
			assert(erc20Instance !== undefined, "DCSport should be defined")

			await erc20Instance.transfer(bettor1, 100, {from: daiOwner});
			await erc20Instance.transfer(bettor2, 100, {from: daiOwner});
			assert(await erc20Instance.balanceOf(bettor1) == 100);
			assert(await erc20Instance.balanceOf(bettor2) == 100);
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