pragma solidity ^0.8.0;

contract Hai{
    uint256 public _x;
    constructor(uint256 x){
      _x = x;
    }
    function read() public view returns(uint256){
      return _x;
    }
}