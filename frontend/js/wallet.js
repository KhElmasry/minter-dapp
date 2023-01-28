const connectButton = document.getElementById("connect-button");

connectButton.addEventListener("click", async function() {
    if (window.ethereum) {
        try {
            // Request account access
            await window.ethereum.enable();
            // Connected to Metamask
            web3 = new Web3(ethereum);
            console.log("Connected to Metamask");
        } catch (error) {
            // User denied account access
            console.log("User denied account access");
        }
    } else {
        console.log("Metamask not found");
    }
});
if(web3)
connectButton.classList.add("connected");
else
connectButton.classList.remove("connected");
