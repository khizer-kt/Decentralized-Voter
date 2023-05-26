## Decentralized-Voter
The decentralized voting application is a Solidity smart contract that allows users to participate in a voting process by casting their votes for specific candidates. The application is implemented using the Ethereum blockchain platform.
### How to Run the Application:
1. Install the required software:  
    - Solidity compiler: You need to have a Solidity compiler installed on your machine. You can find the installation instructions on the Solidity website.
    - Ethereum development framework (optional): You can use a development framework like Truffle or Hardhat to compile and deploy the contract. Follow the respective framework's documentation for installation instructions.
2. Save the Solidity Code:
    - Create a new file and save the Solidity code in it.  
    - Use the file extension .sol (e.g., Voting.sol).
3. Compile the Smart Contract:
  ```
  solc --bin --abi --optimize --overwrite -o ./output ./Voting.sol
  ```
4. Deploy the Smart Contract, if you're using an Ethereum development framework like Truffle or Hardhat, follow their documentation on deploying smart contracts.
Alternatively, you can deploy the contract to a test network using Remix IDE or a similar tool. Refer to the respective tool's documentation for deployment instructions.
Make sure to keep track of the deployed contract's address for interacting with it.
5. Interact with the Smart Contract, to interact with the deployed smart contract, you can use web3.js or any other Ethereum client library.
In your JavaScript file, include the appropriate web3.js library and set up a connection to an Ethereum network using Infura or a local node.
Make sure to replace the placeholder values in the JavaScript code (contract address, ABI, account address, and private key) with the actual values.
Save the JavaScript code with the file extension .js (e.g., vote.js).
6. Run the JavaScript Code:
```
node vote.js 
```
7. Verify the Results, after running the JavaScript code, check the output to see if the transaction was successful.
You can also verify the voting results by calling the getData function on the deployed contract.

