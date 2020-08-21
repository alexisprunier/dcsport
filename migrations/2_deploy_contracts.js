const DCSport = artifacts.require("DCSport");
const SPORT = artifacts.require("SPORT");
const SPORTStaker = artifacts.require("SPORTStaker");

var initialTokenSupply = 10 ** 8

module.exports = async function (deployer) {
	await deployer.deploy(SPORTStaker);
	await deployer.deploy(SPORT, initialTokenSupply);
	await deployer.deploy(DCSport);
};
