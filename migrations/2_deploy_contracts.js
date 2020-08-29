const DCSport = artifacts.require("DCSport");
// For v2.0
//const Sport = artifacts.require("Sport");
// For v2.0
// const SportStaker = artifacts.require("SportStaker");
const ERC20 = artifacts.require("ERC20");

var initialTokenSupply = 10 ** 6

module.exports = async function (deployer) {

	let tokenAddress;

	if (true) {
		await deployer.deploy(ERC20, 1000, {from: arguments[2][0]});
		let dai = await ERC20.deployed();
		tokenAddress = dai.address;
	} else {
		tokenAddress = 0x6b175474e89094c44da98b954eedeac495271d0f;
	}

	// For v2.0
	//await deployer.deploy(SPORTStaker);
	// For v2.0
	//await deployer.deploy(Sport, initialTokenSupply);
	await deployer.deploy(DCSport, tokenAddress, {from: arguments[2][1]});
};
