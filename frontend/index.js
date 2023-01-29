window.addEventListener('load', async () => {
    if (window.ethereum) {
      window.ethereum.autoRefreshOnNetworkChange = false;
      window.web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        window.ethereum.on('accountsChanged', function (accounts) {
          location.reload();
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
  });
  
  const abi = [
    {
      // Contract ABI here
    }
  ];
  
  const mintButton = document.getElementById("mint-button");
  const nftCountInput = document.getElementById("nft-count");
  
  mintButton.addEventListener("click", async function() {
    const nftCount = nftCountInput.value;
    const contractAddress = "0xF8402BE77548A298F6Ef979f5AAd90573cfC99A0";
    const contract = new window.web3.eth.Contract(abi, contractAddress);
  
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      // Call the "mint" function of your contract
      contract.methods
        .mint(nftCount)
        .send({ from: accounts[0] })
        .on("transactionHash", function(transactionHash) {
          console.log("Transaction hash:", transactionHash);
        })
        .on("confirmation", function(confirmationNumber, receipt) {
          console.log("Confirmation number:", confirmationNumber);
        })
        .on("receipt", function(receipt) {
          console.log("Receipt:", receipt);
        });
    } catch (error) {
      console.error(error);
    }
  });
  