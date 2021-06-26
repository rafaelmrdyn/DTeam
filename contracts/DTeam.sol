// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;
pragma abicoder v2;

contract DTeam {
    string[] public team;
    address public owner;

    modifier restricted() {
        if (msg.sender == owner) _;
    }

    constructor() {
        owner = msg.sender;
    }

	function setNewMember(string memory _name) public restricted {
		team.push(_name);
	}

    function getTeamMembers() public view returns (string[] memory) {
        return team;
    }
}
