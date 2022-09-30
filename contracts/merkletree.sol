// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.9;


import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";


interface TokenIERC20 {
    function transfer(address to, uint256 amount) external returns(uint256);
}



contract Merkle{
    TokenIERC20 tokenAddr;
    bytes32 public merkleRoot = 0x7f2c343b62f283510e39def173f904324c6b30ee8d7af78ea00b3a493fbfd134;

    mapping(address => bool) whitelisted;

    uint256 airdropPrice = 20e18;

    constructor(TokenIERC20 _tokenAddr){
        tokenAddr = _tokenAddr;
    }


    function WhitelistMint(bytes32[] calldata proof) public {
        require(!whitelisted[msg.sender], "You have claimed");

        bytes32 leaf = keccak256(abi.encodePacked(msg.sender));
        require(MerkleProof.verify(proof, merkleRoot, leaf), "Invalid proof");
        
        tokenAddr.transfer(msg.sender, airdropPrice);


        whitelisted[msg.sender] = true;
    }
}