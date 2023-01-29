const connectWalletButton = document.getElementById("connect-wallet-button");

connectWalletButton.addEventListener("click", async function () {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.enable();
      console.log(accounts);
    } catch (error) {
      console.error(error);
    }
  } else {
    console.error("Non-Ethereum browser detected. You should consider trying MetaMask!");
  }
});
