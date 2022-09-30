import { mine } from "@nomicfoundation/hardhat-network-helpers";
import { ethers } from "hardhat";
const helpers = require("@nomicfoundation/hardhat-network-helpers");


async function main() {

  

  const claimer = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";
  await helpers.impersonateAccount(claimer);

  const Claimer = await ethers.getSigner(claimer);
  const MineT = await ethers.getContractFactory("Mine");
  const mine = await MineT.deploy();

  await mine.deployed();

  console.log(`Address deployed to: ${mine.address}`);
  
  const MineAddr = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

  const Mine = await ethers.getContractAt("IERC20", MineAddr);
  const [deployer] = await ethers.getSigners()


  const myBalance = await Mine.balanceOf(deployer.address);

  console.log(myBalance);

  const MerkleAdd = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
  const merkle = await ethers.getContractAt("Merkle", MerkleAdd);

  const merklecall = await merkle.connect(claimer).WhitelistMint(["0xe8ff8b7380eb0d14a81a480c9dfbd9567905bf2c89e0991dfac4b0af130b78e7","0x4899e98e2f54e8a73c48270f38a353d3d12ac540f4bae7f57779589b0ff54f8b","0xe83c362b56ae2661bea920face054dc0deb7bf154ad83a062bb22d569fb8a9ea","0xecf457e7fac008f543a30c7523124726c78fda4936269cfd9eeab455e3e3815e"])

  await merklecall.wait()

  const MerkleTree = await ethers.getContractFactory("Merkle")
  const merkledeployer = await MerkleTree.deploy("0x5FbDB2315678afecb367f032d93F642f64180aa3");

  await merkledeployer.deployed();

  console.log(`Merkle COntract deployed to: ${merkle.address}`);




}
  

  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });

// token contract: 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512

  // Merkle: 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0