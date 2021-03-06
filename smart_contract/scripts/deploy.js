const hre = require("hardhat");

const main = async () => {
	// We get the contract to deploy
	const Transactions = await hre.ethers.getContractFactory("Transactions");
	const transactions = await Transactions.deploy();

	await greeter.deployed();

	console.log("Transactions deployed to:", transactions.address);
};

const runMain = async () => {
	try {
		await main();
		process.exit(0);
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};
runMain();
