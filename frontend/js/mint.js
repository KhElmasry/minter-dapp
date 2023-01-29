const Web3 = require('web3');
const web3 = new Web3('https://goerli.infura.io/v3/YOUR-PROJECT-ID');

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

const contractAddress = '0xF8402BE77548A298F6Ef979f5AAd90573cfC99A0';

const contract = new web3.eth.Contract(abi, contractAddress);

async function mintNFT(name, image) {
const accounts = await web3.eth.getAccounts();
const account = accounts[0];

await contract.methods.mint(name, image).send({ from: account });

console.log("NFT minted successfully!");
}