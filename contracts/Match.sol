pragma solidity ^0.5.9; 

import "./DCSport.sol";
import "./ERC20.sol";

contract Match {

    // Organization
    DCSport public dcsport;
    
    // Both of the teams competing in the match
    string public opponent1;
    string public opponent2;

    // Time of the match
    uint public startTime;

    // Initiator of the match
    address public bookmaker;

    // if yes, it is possible to vote for a draw result
    bool public acceptDraw;

    // Status of the betting
    enum Status {INIT, ON_GOING, LOCKED, FINISHED, CANCELLED, DESTROYED}
    Status public status;

    // Bets
    //
    // position 0 : bets for draw
    // position 1 : bets for the opponent1
    // position 2 : bets for the opponent2
    //
    mapping(address => uint)[3] public bets;
    uint[3] public totalBetsPerPosition;
    address[] public bettors;

    // Accepted token in the betting
    address daiToken;


    constructor(DCSport _addr, string memory _opponent1, string memory _opponent2, uint _startTime, bool _acceptDraw) public {

        // Register the match within the organization
        dcsport = _addr;
        //dcsport.addMatch(msg.sender);

        // Init attributes
        bookmaker = msg.sender;
        opponent1 = _opponent1;
        opponent2 = _opponent2;
        startTime = _startTime;
        acceptDraw = _acceptDraw;
        status = Status.INIT;

        daiToken = 0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa;
    }

    modifier refereePower() {
        require (bookmaker == msg.sender);
        _;
    }
    
    modifier validPosition(uint8 position) { 
        if (acceptDraw)
            require(position == 0 || position == 1 || position == 2, "Unknown position");
        else
            require(position == 1 || position == 2, "Unknown position");

        _;
    }

    modifier validStatus(Status _validStatus) { 
        require(status == _validStatus, "The status is not correct for this function");
        _;
    }

    function bet(uint8 betPosition, uint amount) public validStatus(Status.ON_GOING) validPosition(betPosition) {
        require(block.timestamp > (startTime - 5 minutes), "The bets are not available anymore for this match");
        require(amount > 1, "The minimum value of betting is 1 DAI");
        require(ERC20(daiToken).balanceOf(msg.sender) > amount, "Insufficient balance of DAI");

        ERC20(daiToken).transferFrom(msg.sender, bookmaker, amount);
        bets[betPosition][msg.sender] += amount;
        totalBetsPerPosition[betPosition] += amount;

        if (!hasAlreadyBet(msg.sender))
            bettors.push(msg.sender);
    }

    function declareWinner(uint8 winnerPosition) public refereePower validStatus(Status.ON_GOING) validPosition(winnerPosition) {
        require(block.timestamp > startTime, "Cannot declare winner before the starting time of the match");

        // We get the total amount to distribute

        uint totalToDistribute = 0;

        for (uint8 i=0; i < totalBetsPerPosition.length; i++) {
            totalToDistribute += totalBetsPerPosition[i];
        }

        // We distribute to all the winners

        for (uint i=0; i < bettors.length; i++) {
            if (bets[winnerPosition][bettors[i]] > 0) {
                uint prizeRatio = bets[winnerPosition][bettors[i]] / totalBetsPerPosition[winnerPosition];
                ERC20(daiToken).transfer(bettors[i], totalToDistribute * prizeRatio);
            }
        }

        // We close the match

        status = Status.FINISHED;
    }

    function cancel() public refereePower validStatus(Status.ON_GOING) {

        // we distribute back the funds from the on-going bets

        for (uint8 i=0; i < totalBetsPerPosition.length; i++) {
            if (totalBetsPerPosition[i] > 0) {
                for (uint y=0; y < bettors.length; y++) {
                    if (bets[i][bettors[y]] > 0) {
                        ERC20(daiToken).transfer(bettors[y], bets[i][bettors[y]]);
                    }
                }
            }
        }

        // We set the match as cancelled

        status = Status.CANCELLED;
    }

    function hasAlreadyBet(address addr) private view returns (bool) {

        for (uint8 i=0; i < bets.length; i++) {
            if (bets[i][addr] > 0)
                return true;
        }

        return false;
    }
}