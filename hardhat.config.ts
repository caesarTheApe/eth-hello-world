import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { config as dotenvConfig } from 'dotenv';
dotenvConfig();

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: `${process.env.SEPOLIA_RPC_URL}`,
      accounts: [`${process.env.ACCOUNT_PRIV_KEY}`],
      chainId: 11155111
    }
  }
};

export default config;
