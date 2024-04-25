import { ethers } from "hardhat";
import * as fs from 'fs';
import * as path from 'path';

async function main() {
  const network = await ethers.provider.getNetwork();
  console.log("Network:", network);

  const [deployer] = await ethers.getSigners();
  console.log("Deployer:", deployer.address);

  const contractAddress = '0xb42Da32Bae33f95C75907fc02B131869c4b273b2';
  const artifactsDir = path.join(__dirname, '../artifacts/contracts');
  const artifactPath = path.join(artifactsDir, 'HelloWorld.sol/HelloWorld.json');
  const artifact = JSON.parse(fs.readFileSync(artifactPath, 'utf8'));
  const abi = artifact.abi;

  console.log("ABI:", JSON.stringify(abi));

  const contract = new ethers.Contract(contractAddress, abi, deployer);

  console.log("Contract instantiated:", contract);

  try {
    const message = await contract.greet();
    console.log('The contract greets:', message);
  } catch (error) {
    console.error('Failed to fetch greeting:', error);
  }
}

main().catch((error) => {
  console.error("Script failed:", error);
  process.exit(1);
});
