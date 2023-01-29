// Import the web3.js library
import Web3 from 'web3';
const Web3 = require('web3');

// Connect to the Goerli test network through Infura
const web3 = new Web3(new Web3.providers.HttpProvider("https://goerli.infura.io/v3/YOUR-PROJECT-ID"));

// Define the ABI (Application Binary Interface) of your smart contract
const abi = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_image",
        "type": "string"
      }
    ],
    "name": "mint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

// Define the address of your smart contract on the Goerli test network
const contractAddress = '0xF8402BE77548A298F6Ef979f5AAd90573cfC99A0';

// Create a contract object that allows you to interact with your smart contract
const contract = new web3.eth.Contract(abi, contractAddress);

// Mint a new NFT by sending a transaction to the smart contract
async function mintNFT(name, image) {
  // Get the current account
  const accounts = await web3.eth.getAccounts();
  const account = accounts[0];

  // Mint the NFT by calling the "mint" function of the smart contract
  await contract.methods.mint(name, image).send({ from: account });

  console.log("NFT minted successfully!");
}
