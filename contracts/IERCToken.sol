// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.9;


import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";


interface IERCToken {
    function transfer(address to, uint256 amount) external returns(uint256);
    function balanceOf(address account) external view returns (uint256);
}