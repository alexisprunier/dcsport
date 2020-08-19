const Match = artifacts.require("Match");
const DCSport = artifacts.require("DCSport");

module.exports = function (deployer) {
	deployer.deploy(DCSport).then(function() {
    	return deployer.deploy(Match, DCSport.address, "PSG", "OL", 1597847460, true);
    });
};
