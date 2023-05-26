const Web3 = require('web3');
const web3 = new Web3('https://ropsten.infura.io/v3/YOUR_INFURA_PROJECT_ID');

// Set the contract address and ABI
const contractAddress = 'CONTRACT_ADDRESS';
const contractABI = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "_candidateId",
                "type": "uint256"
            }
        ],
        "name": "vote",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "candidates",
        "outputs": [
            {
                "name": "name",
                "type": "string"
            },
            {
                "name": "voteCount",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "candidatesCount",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];

// Set the account that will interact with the contract
const accountAddress = 'YOUR_ACCOUNT_ADDRESS';
const privateKey = 'YOUR_PRIVATE_KEY';

// Create a contract instance
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Function to cast a vote for a candidate
async function vote(candidateId) {
    const encodedData = contract.methods.vote(candidateId).encodeABI();
    const gasPrice = await web3.eth.getGasPrice();
    const gasLimit = 300000; // Adjust the gas limit as needed
    const nonce = await web3.eth.getTransactionCount(accountAddress);

    const tx = {
        to: contractAddress,
        data: encodedData,
        gasPrice: gasPrice,
        gas: gasLimit,
        nonce: nonce
    };

    const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    console.log('Transaction receipt:', receipt);
}

// Example usage: Cast a vote for candidate with ID 1
vote(1); 
