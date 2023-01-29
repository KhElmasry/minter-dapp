window.addEventListener('load', async () => {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.enable();
        } catch (error) {
            console.error(error);
        }
    } else {
        console.error('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
});

const abi = [
    {
        // Replace with actual Contract ABI
    }
];

const mintButton = document.getElementById("mint-button");
const nftCountInput = document.getElementById("nft-count");

if (!mintButton || !nftCountInput) {
    console.error("Could not find the mint button or nft count input element on the page.");
    return;
}

mintButton.addEventListener("click", async function () {
    const nftCount = nftCountInput.value;
    const contractAddress = "0xF8402BE77548A298F6Ef979f5AAd90573cfC99A0";
    const contract = new window.web3.eth.Contract(abi, contractAddress);

    await window.ethereum.enable();
    // Replace with actual implementation of mint function
    contract.methods
        .mint(nftCount)
        .send({ from: window.web3.eth.defaultAccount })
        .on("transactionHash", function (transactionHash) {
            console.log("Transaction hash:", transactionHash);
        })
        .on("confirmation", function (confirmationNumber, receipt) {
            console.log("Confirmation number:", confirmationNumber);
        })
        .on("receipt", function (receipt) {
            console.log("Receipt:", receipt);
        });
});
