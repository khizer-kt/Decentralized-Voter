// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    struct Candidate {
        string name;
        uint256 voteCount;
    }

    mapping(uint256 => Candidate) public candidates;
    uint256 public candidatesCount;

    constructor(string[] memory _candidateNames) {
        for (uint256 i = 0; i < _candidateNames.length; i++) {
            candidatesCount++;
            candidates[candidatesCount] = Candidate({
                name: _candidateNames[i],
                voteCount: 0
            });
        }
    }

    function vote(uint256 _candidateId) public {
        require(_candidateId > 0 && _candidateId <= candidatesCount, "Invalid candidate");
        candidates[_candidateId].voteCount++;
    }
} 
