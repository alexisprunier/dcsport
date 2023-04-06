pragma solidity ^0.5.9; 

/*import "./Sport.sol";
import "./IERC20.sol";

contract SportStaker {

    // Bookmaker of the organisation
    address public bookmaker;

    // In-app credit of bettors
    mapping(address => Stake) public stakes;

    // In-app credit of bettors
    IERC20 sportToken;

    // Stack
    struct Stake {
        uint unlockTime;
        bool amount;
    }

    constructor(address _sportToken) public {
        bookmaker = msg.sender;
        sportToken = IERC20(_sportToken);
    }

    function stack(uint _amount) public {
        require(sportToken.balanceOf(msg.sender) >= _amount);

        if (stakes[msg.sender].amount) {
            Stake memory s = Stake(
                block.timestamp + (60 * 60 * 24 * 30), // We lock the stacking for a month
                _amount
            );

            stakes[msg.sender] = s;
        } else {
            stakes[msg.sender].amount += _amount;
            stakes[msg.sender].unlockTime = block.timestamp + (60 * 60 * 24 * 30);
        }

        require(sportToken.transferFrom(msg.sender, bookmaker, _amount), "Token trasfert failed"); 
    }

    function withdraw(uint _amount) public {
        require(sportToken.balanceOf(msg.sender) >= _amount, "The requested amount is bigger than the staked amount");
        require(stakes[msg.sender].unlockTime != 0, "You don't have any stake");
        require(stakes[msg.sender].unlockTime >= block.timestamp, "Your tokens are still blocked");

        stakes[msg.sender].amount -= _amount;

        require(sportToken.transferFrom(bookmaker, msg.sender, _amount), "Token trasfert failed"); 
    }
}*/