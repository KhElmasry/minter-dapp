import { useState } from "react";
import { ethers, BigNumber } from 'ethers';
import LazyCatWorld from './LazyCatWorld.json';

const LazyCatWorldAddress = "0xF8402BE77548A298F6Ef979f5AAd90573cfC99A0";

const MainMint = ({ accounts, setAccounst }) => {
    const [mintAmount, setMintAmount] = useState(1);
    const isConnected = Boolean(accounts[0]);

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
            LazyCatWorldAddress,
            LazyCatWorld.abi,
            signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount));
                console.log('response: ', response);
            } catch (err) {
                console.log("error", err)
            }
        }
    }
    const handleDecrement =  () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    };

    const handleIncrement =  () => {
        if (mintAmount >= 5) return;
        setMintAmount(mintAmount + 1);
    };
    
    return (

        <div>
            <h1>LazyCatWorld</h1>
            <p>It's "Add your discription</p>
            {isConnected ? (
                <div>
                    <div>
                        <button onClick={handleDecrement}>-</button>
                        <input type="number" value={mintAmount} />
                        <button onClick={handleIncrement}>+</button>
                    </div>
                    <button onClick={handleMint}> Mint Now</button>
                </div>
            ) : (
                <p>You must be connected to mint</p>
            )}
            </div>
    );
};

export default MainMint;