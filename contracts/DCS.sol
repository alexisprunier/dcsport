pragma solidity ^0.5.9; 

contract DCSport {

    address public creator;

    address[] matches;

    constructor() public {
        creator = msg.sender;
    }

    modifier creatorPower() {
        require (creator == msg.sender);
        _;
    }

    function addMatch(address _match) public creatorPower {
        matches.push(_match);
    }
}