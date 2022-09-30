import { ethers } from "hardhat";

const { MerkleTree } = require('merkletreejs');
const keccak256 = require('keccak256')
// const fs = require("fs");



async function main() {
    // We are using a particular hardhat generated addresses for the whitelist addresses
    const userslist = [
        0xffe8ce363711b3a51f978a6a283d211b3448f2cf,
        0x1e1790fd4ef76195dfcb3e76dd5ae662e859c1c3,
        0x978eb4bef0a31f9e582f194a72cff24f0d6cd821,
        0x8b6fb35fb81d898ff312b28d827f7045895244dc,
        0x8b77925bbdef4a09550bc5b21009ff007b05e242,
        0x584ada9e3c93d8115e599ab131e5fbabdb607f53,
        0x70997970C51812dc3A010C7d01b50e0d17dc79C8,
        0x2f4c12d78bae58a2fc376b1eddacc8ba66360cf7,
        0xacd5543fcc62283de6622583ea405fdf91de8a43,
        0x70138175edac16f91a09feefdda60fe96e4e492e,
        0x5c62c82ba0d59abe4218539489b56e872fec9604,
    ]



    const encodeLeaf = userslist.map(addr => keccak256(addr));

    const merkleTree = new MerkleTree(encodeLeaf, keccak256, {sortPairs: true});

    const rootHash = merkleTree.getHexRoot();
// Test to check if an address is in the merkle tree

    const claimingAddress = 0x70997970C51812dc3A010C7d01b50e0d17dc79C8;
    const claimingAdd = keccak256(claimingAddress);
    const hexProof = merkleTree.getHexProof(claimingAdd);

    console.log(`The proof of the inputed address is: ${hexProof}`);


    // console.log(`The Whitelist merkleTree are: ${merkleTree.toString()}`);
    // console.log(`The Root hash of the merkle tree is: ${rootHash}`);



  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });



//   0xffe8ce363711b3a51f978a6a283d211b3448f2cf
//   0x1e1790fd4ef76195dfcb3e76dd5ae662e859c1c3
//   0x978eb4bef0a31f9e582f194a72cff24f0d6cd821
//   0x8b6fb35fb81d898ff312b28d827f7045895244dc
//   0x8b77925bbdef4a09550bc5b21009ff007b05e242
//   0x584ada9e3c93d8115e599ab131e5fbabdb607f53
//   0x8be07f8440e069b850e566e473fdf9302fb5874b
//   0x2f4c12d78bae58a2fc376b1eddacc8ba66360cf7
//   0xacd5543fcc62283de6622583ea405fdf91de8a43
//   0x70138175edac16f91a09feefdda60fe96e4e492e
//   0x5c62c82ba0d59abe4218539489b56e872fec9604




