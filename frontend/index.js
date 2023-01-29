if (typeof window.ethereum !== "undefined") {
    const web3 = new Web3(window.ethereum);
    window.ethereum.enable().then(async () => {
      // Your code with the `await` keyword here
    });
  } else {
    console.error("Please install MetaMask to use this website");
  }
  
const mintButton = document.getElementById("mint-button");
const nftCountInput = document.getElementById("nft-count");

mintButton.addEventListener("click", async function() {
  const nftCount = nftCountInput.value;
  const web3 = new Web3(window.ethereum);
  await window.ethereum.enable();
  const contractAddress = "0xF8402BE77548A298F6Ef979f5AAd90573cfC99A0";
  const abi = [
    {
      // Contract ABI here
    }
  ];
  const contract = new web3.eth.Contract(abi, contractAddress);
  
  // Call the "mint" function of your contract
  contract.methods
    .mint(nftCount)
    .send({ from: web3.eth.defaultAccount })
    .on("transactionHash", function(transactionHash) {
      console.log("Transaction hash:", transactionHash);
    })
    .on("confirmation", function(confirmationNumber, receipt) {
      console.log("Confirmation number:", confirmationNumber);
    })
    .on("receipt", function(receipt) {
      console.log("Receipt:", receipt);
    });
    
  // Add code here to connect to your smart contract and mint NFTs
});
const Web3 = require("web3");
