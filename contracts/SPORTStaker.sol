pragma solidity ^0.5.9; 

import "./SPORT.sol";

contract SPORTStaker {

    // In-app credit of bettors
    mapping(address => Stake) public stakes;

    // In-app credit of bettors
    IERC20 sportToken;

    // Stack
    struct Stake {
        uint unlockTime;
        bool amount;
    }

    constructor() public {
        //sportToken = Sport;
    }

    function stack(uint _amount) public {
        require(sportToken.balanceOf(msg.sender) >= _amount);

        /*if (stakes[msg.sender].amount) {
            Stake memory s = Match(
                block.timestamp + (60 * 60 * 24 * 30),
                _amount
            );

            stakes[msg.sender] = s;
        } else {
            stakes[msg.sender].amount += _amount;
            stakes[msg.sender].unlockTime = block.timestamp + (60 * 60 * 24 * 30);
        }*/
    }

    function withdraw(uint _amount) public {
        require(sportToken.balanceOf(msg.sender) >= _amount, "The requested amount is bigger than the staked amount");
        require(stakes[msg.sender].unlockTime != 0, "You don't have any stake");
        require(stakes[msg.sender].unlockTime >= block.timestamp, "Your tokens are still blocked");
        


    }
}