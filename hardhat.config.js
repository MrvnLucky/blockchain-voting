require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()

const { RPC_URL, PRIVATE_KEY, ETHERSCAN_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "Sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: RPC_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_KEY,
  },
};
