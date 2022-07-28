// SPDX-License-Identifier: MIT
pragma solidity 0.8.5;

interface IERC20 {
    function transfer(address to, uint256 amount) external returns (bool);
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
}

contract BridgeAssistX {
    address public owner;
    mapping(address => uint256) public locked;
    mapping(address => bool) public directionE;

    IERC20 public STABLE;

    modifier restricted {
        require(msg.sender == owner, "This function is restricted to owner");
        _;
    }

    event WriteEntry(address indexed sender, bool directionE, uint256 amount);
    event Collect(address indexed sender, bool directionE, uint256 amount, bool _stable);
    event Dispense(address indexed sender, bool directionE, uint256 amount, bool _stable);
    event TransferOwnership(address indexed previousOwner, address indexed newOwner);

    function writeEntry(bool _directionE) public payable {
        uint256 _e = locked[msg.sender];
        require(msg.value != _e, "Entry already contains this msg.value");
        if (_e > 0) {
            (bool _s, ) = msg.sender.call{value: _e}("");
            require(_s, "ETHO transfer failure. Contact contract owner");
        }
        locked[msg.sender] = msg.value;
        directionE[msg.sender] = _directionE;
        emit WriteEntry(msg.sender, _directionE, msg.value);
    }

    function collect(address _sender, uint256 _amount, bool _directionE, bool _stable) public restricted returns (bool success) {
        if (_stable) {
            STABLE.transferFrom(_sender, address(this), _amount);
            emit Collect(_sender, _directionE, _amount, true);
            return true;
        }

        uint256 _e = locked[_sender];
        require(_e == _amount, "Amount check failed");
        require(directionE[_sender] == _directionE, "Direction check failed");
        locked[_sender] = 0;
        emit Collect(_sender, _directionE, _e, false);
        return true;
    }

    function dispense(address _sender, uint256 _amount, bool _directionE, bool _stable) public restricted returns (bool success) {
        if (_stable) {
            STABLE.transfer(_sender, _amount);
            emit Collect(_sender, _directionE, _amount, true);
            return true;
        }
        (bool _s, ) = _sender.call{value: _amount}("");
        require(_s, "ETHO transfer failure. Contact contract owner");
        emit Dispense(_sender, _directionE, _amount, false);
        return true;
    }

    function transferOwnership(address _newOwner) public restricted {
        emit TransferOwnership(owner, _newOwner);
        owner = _newOwner;
    }

    constructor(IERC20 _STABLE) {
        STABLE = _STABLE;
        owner = msg.sender;
    }
}
