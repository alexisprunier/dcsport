pragma solidity ^0.5.9; 

import "./IERC20.sol";
import "./SPORT.sol";
import "./SPORTStaker.sol";

contract DCSport {

    // Bookmaker of the organisation
    address public bookmaker;

    // Increment for the match id
    uint public incrementedId;

    // Match status
    enum Status {ON_GOING, LOCKED, FINISHED, CANCELLED, DESTROYED}

    // Match
    struct Match {
        string opponent1;
        string opponent2;
        uint startTime;
        bool acceptDraw;
        Status status;
        uint[3] totalBetsPerPosition;
        address[] bettors;
        mapping(address => uint)[3] bets;
    }

    // All matches
    mapping(uint => Match) public matches;

    // In-app credit of bettors
    mapping(address => uint) public credits;

    // Accepted token in the betting
    IERC20 daiToken;

    constructor() public {
        bookmaker = msg.sender;
        daiToken = IERC20(0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa);
        incrementedId = 0;
    }

    modifier bookmakerOnly() {
        require (bookmaker == msg.sender, "You are not the bookmaker");
        _;
    }

    modifier validMatch(uint matchId) { 
        require(matches[matchId].startTime != 0, "Unfound match with this ID");
        _;
    }
    
    modifier validPosition(uint matchId, uint8 position) { 
        if (matches[matchId].acceptDraw)
            require(position == 0 || position == 1 || position == 2, "Unknown position");
        else
            require(position == 1 || position == 2, "Unknown position");

        _;
    }

    modifier validStatus(uint matchId, Status _validStatus) { 
        require(matches[matchId].status == _validStatus, "The status is not correct for this function");
        _;
    }

    function addMatch(string memory _opponent1, string memory _opponent2, uint _startTime, bool _acceptDraw) public bookmakerOnly {
        require(bytes(_opponent1).length > 1, "Length of the opponent 1 is not correct");
        require(bytes(_opponent2).length > 1, "Length of the opponent 2 is not correct");
        require(_startTime > block.timestamp + 86400, "The starting time is too short to initiate the match");

        int[3] memory emptyUintArray;
        address[] memory emptyAddressArray;
        mapping(address => uint)[3] memory emptyBets;
        
        Match memory m = Match(
            _opponent1,
            _opponent2,
            _startTime,
            _acceptDraw,
            Status.ON_GOING,
            emptyUintArray,
            emptyAddressArray,
            emptyBets
        );

        matches[incrementedId] = m;

        incrementedId += 1;
    }

    // Public functions

    function bet(uint matchId, uint8 betPosition, uint amount) public validMatch(matchId) validStatus(matchId, Status.ON_GOING) validPosition(matchId, betPosition) {
        require(block.timestamp < (matches[matchId].startTime - 5 minutes), "The bets are not available anymore for this match");
        require(amount > 1, "The minimum value of betting is 1 DAI");
        //require(amount < daiToken.balanceOf(msg.sender), "Insufficient balance of DAI");

        //daiToken.transferFrom(msg.sender, bookmaker, amount);
        //matches[matchId].bets[betPosition][msg.sender] += amount;
        //matches[matchId].totalBetsPerPosition[betPosition] += amount;

        //if (!hasAlreadyBet(matchId, msg.sender))
        //    matches[matchId].bettors.push(msg.sender);
    }

    function publishResult(uint matchId, uint8 winnerPosition) public bookmakerOnly validMatch(matchId) validStatus(matchId, Status.ON_GOING) validPosition(matchId, winnerPosition) {
        require(block.timestamp > matches[matchId].startTime, "Cannot declare winner before the starting time of the match");

        // We get the total amount to distribute

        uint totalToDistribute = 0;

        for (uint8 i=0; i < matches[matchId].totalBetsPerPosition.length; i++) {
            totalToDistribute += matches[matchId].totalBetsPerPosition[i];
        }

        // We distribute to all the winners

        for (uint i=0; i < matches[matchId].bettors.length; i++) {
            if (matches[matchId].bets[winnerPosition][matches[matchId].bettors[i]] > 0) {
                uint prizeRatio = matches[matchId].bets[winnerPosition][matches[matchId].bettors[i]] / matches[matchId].totalBetsPerPosition[winnerPosition];
                credits[matches[matchId].bettors[i]] += totalToDistribute * prizeRatio;
            }
        }

        // We close the match

        matches[matchId].status = Status.FINISHED;
    }

    function cancel(uint matchId) public bookmakerOnly validMatch(matchId) validStatus(matchId, Status.ON_GOING) {

        // we distribute back the funds from the on-going bets

        for (uint8 i=0; i < matches[matchId].totalBetsPerPosition.length; i++) {
            if (matches[matchId].totalBetsPerPosition[i] > 0) {
                for (uint y=0; y < matches[matchId].bettors.length; y++) {
                    if (matches[matchId].bets[i][matches[matchId].bettors[y]] > 0) {
                        credits[matches[matchId].bettors[y]] += matches[matchId].bets[i][matches[matchId].bettors[y]];
                    }
                }
            }
        }

        // We set the match as cancelled

        matches[matchId].status = Status.CANCELLED;
    }

    function withdraw(uint amount) public {
        require(amount > 1, "The minimum value of betting is 1 DAI");
        require(amount <= credits[msg.sender], "The requested amount is bigger than the available one");

        daiToken.transfer(msg.sender, amount);
    }

    // Private functions

    function hasAlreadyBet(uint matchId, address addr) private view returns (bool) {

        for (uint8 i=0; i < matches[matchId].bets.length; i++) {
            if (matches[matchId].bets[i][addr] > 0)
                return true;
        }

        return false;
    }
}