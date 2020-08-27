const DCSport = artifacts.require("DCSport");
const Sport = artifacts.require("Sport");
const SportStaker = artifacts.require("SportStaker");
const ERC20 = artifacts.require("ERC20");

var initialTokenSupply = 10 ** 8

module.exports = async function (deployer) {

	let tokenAddress;

	if (true) {
		let dai = await deployer.deploy(ERC20);
		tokenAddress = dai.address;
	} else {
		tokenAddress = 0x6b175474e89094c44da98b954eedeac495271d0f;
	}

	await deployer.deploy(SPORTStaker, tokenAddress);
	await deployer.deploy(SPORT, initialTokenSupply);
	await deployer.deploy(DCSport);
};
