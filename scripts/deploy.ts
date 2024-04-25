import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  const provider = deployer.provider;

  console.log("Deploying contracts with the account:", deployer.address);

  try {
    const balance = await provider.getBalance(deployer.address);
    console.log("Account balance:", ethers.formatEther(balance), "ETH");

    const Contract = await ethers.getContractFactory("HelloWorld");

    // Fetch the current gas price from the network
    const gasPrice = (await provider.getFeeData()).gasPrice
    if (gasPrice === null) {
      console.error("Failed to retrieve gas price.");
      return;
    }
    console.log("Current Gas Price:", ethers.formatUnits(gasPrice, 'gwei'), "gwei");

    // Simulate the deployment to estimate gas usage
    const estimatedGas = await provider.estimateGas(await Contract.getDeployTransaction());

    console.log("Estimated Gas:", estimatedGas.toString());

    // Calculate the estimated cost
    const estimatedCost = estimatedGas * gasPrice;
    console.log("Estimated Deployment Cost:", ethers.formatEther(estimatedCost), "ETH");

    // Check if the balance covers the cost
    if (balance < estimatedCost) {
      throw new Error(`Insufficient funds. Required: ${ethers.formatEther(estimatedCost)} ETH, Available: ${ethers.formatEther(balance)} ETH`);
    }

    const contract = await Contract.deploy();
    await contract.deployed();
    console.log(`Contract deployed to: ${contract.address}`);
    // console.log(`Transaction hash: ${contract.deployTransaction}`);
  } catch (err) {
    console.error("Error:", err);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
