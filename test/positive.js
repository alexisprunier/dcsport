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

        dcsportInstance = await DCSport.deployed({from: bookmaker})
        await dcsportInstance.addMatch("PSG", "OL", unixStartTime, true, {from: bookmaker});
        console.log(dcsportInstance.incrementedId)
		console.log(dcsportInstance.matches()[0])
		console.log(dcsportInstance.matches()[1])
        assert(dcsportInstance.matches[0].opponent1 === "PSG");

		/*return DCSport.deployed({from: bookmaker})
			.then(function (instance) {
				dcsportInstance = instance;

				dcsportInstance.addMatch("PSG", "OL", unixStartTime, true, {from: bookmaker});
			})
			.then(() => {
				console.log(dcsportInstance.matches)
				console.log(dcsportInstance.matches[0])
				console.log(dcsportInstance.matches[1])
		        assert(dcsportInstance.matches[0].opponent1 === "PSG");
				assert(dcsportInstance.matches[0].opponent2 === "OL");
				assert(dcsportInstance.matches[0].startTime === unixStartTime);
				assert(dcsportInstance.matches[0].acceptDraw === true);

				dcsportInstance.bet(1, 20 * (18**10), {from: bettor1});
	      	})
	      	.then(() => {
		        assert(dcsportInstance.matches[0].opponent1 === "PSG");
				assert(dcsportInstance.matches[0].opponent2 === "OL");
				assert(dcsportInstance.matches[0].startTime === unixStartTime);
				assert(dcsportInstance.matches[0].acceptDraw === true);
	      	}
	    )*/
	});

})