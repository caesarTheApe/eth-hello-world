# Hello World Smart Contract

This repository contains a basic Hello World smart contract developed with Solidity and deployed on the Ethereum Sepolia test network using Hardhat. The contract is designed to demonstrate the fundamentals of writing, deploying, and interacting with a smart contract.

## Installation

To get started with the Hello World smart contract, follow these steps:

1. Clone the repository:

2. Install the necessary Node.js packages:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and populate it with the necessary environment variables:
   ```plaintext
   ACCOUNT_PRIV_KEY=your_private_key_here
   ```

## Deploying the Contract

To deploy the Hello World contract to the Sepolia network, run the following command:
```
npx hardhat run scripts/deploy.ts --network sepolia
```
This script will deploy the contract and output the contract's address on the network.

## Interacting with the Contract

Once the contract is deployed, you can interact with it by running:
```
npx hardhat run scripts/interact.ts --network sepolia
```
This script contains basic interactions such as reading a state variable or invoking a transactional method on the smart contract.

## Features

The Hello World contract includes the following simple features:
- A function to retrieve a greeting message.
- A function to change the greeting message.
