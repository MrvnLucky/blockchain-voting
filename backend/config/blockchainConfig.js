const { ethers } = require("ethers");

// Set constants with env variables
const RPC_URL = process.env.RPC_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const contractAddress = process.env.CONTRACT_ADDRESS;

// Set blockchain RPC providers with ethers
const provider = new ethers.providers.JsonRpcProvider(RPC_URL);

// Set backend wallet signer
const signer = new ethers.Wallet(PRIVATE_KEY, provider);

// Set contract ABI
const abi =
  require("../../contracts/artifacts/contracts/Voting.sol/Voting.json").abi;

// Set smart contract instance for backend
const contractInstance = new ethers.Contract(contractAddress, abi, signer);

const setUserContractInstance = (privateKey) => {
  const userSigner = new ethers.Wallet(privateKey, provider);
  const userContractInstance = new ethers.Contract(
    contractAddress,
    abi,
    userSigner
  );
  return userContractInstance;
};

module.exports = {
  provider,
  signer,
  abi,
  contractAddress,
  contractInstance,
  setUserContractInstance,
};
