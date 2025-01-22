// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UserRoles {
    // Enum for user roles
    enum Role { None, Student, Professor, Employer }

    address public admin; // Contract admin

    // Mapping to store roles for each address
    mapping(address => Role) public userRoles;

    // Events for role assignment and admin changes
    event RoleAssigned(address indexed user, Role role);
    event AdminChanged(address indexed oldAdmin, address indexed newAdmin);

    // Constructor: set the deployer as admin
    constructor() {
        admin = msg.sender;
    }

    // Modifier to restrict functions to admin
    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    // Function to assign roles to a user
    function assignRole(address user, Role role) public onlyAdmin {
        require(user != address(0), "Invalid address");
        require(role != Role.None, "Invalid role");
        userRoles[user] = role;
        emit RoleAssigned(user, role);
    }

    // Function to get a user's role
    function getUserRole(address user) public view returns (Role) {
        return userRoles[user];
    }

    // Function to change the admin
    function changeAdmin(address newAdmin) public onlyAdmin {
        require(newAdmin != address(0), "Invalid admin address");
        address oldAdmin = admin;
        admin = newAdmin;
        emit AdminChanged(oldAdmin, newAdmin);
    }
}