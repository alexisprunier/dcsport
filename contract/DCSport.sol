pragma solidity ^0.5.9; 

contract DCSport {

	address public creator;

	address[] matches;

	constructor() public {
		
    }

    modifier creatorPower() {
    	require (bookmaker == msg.sender)
    	_;
    }

    function addMatch(address match) public creatorPower {
    	matches.push(match)
    }
}