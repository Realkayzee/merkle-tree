// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Mine is ERC20("Mine", "MToken"){
    constructor(){
        _mint(msg.sender, 100000000 * 10e18);
    }
}