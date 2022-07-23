// https://eth-rinkeby.alchemyapi.io/v2/f3lwcQ6RaoXXcVSZzr-eMVFYX7Gwrrtu
require("@nomiclabs/hardhat-waffle");

module.exports = {
	solidity: "0.8.0",
	networks: {
		rinkeby: {
			url: "https://eth-rinkeby.alchemyapi.io/v2/f3lwcQ6RaoXXcVSZzr-eMVFYX7Gwrrtu",
			accounts: [
				"27c3c2223d80fd08d229ba378bf537c2c9923a8461f694886f33951293e7b3a4",
			],
		},
	},
};
