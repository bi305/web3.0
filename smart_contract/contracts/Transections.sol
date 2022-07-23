// SPDX-License-Identifier: UNLICENSED
pragma solidity   ^0.8.0;

contract Transaction {
 uint256 TransactionCount;
 event Transfer(address from,address to,uint amount,string message,uint256 timeStamp ,string keyword);

struct TransferStruct{
    address from;
    address to;
    uint amount;
    string message;
    uint256 timeStamp;
    string keyword;


}
TransferStruct[] transfers;
function  addToBlockchain(address payable reciver ,uint amount  ,string memory message,string memory keyword ) public{
    TransactionCount +=1;
    transfers.push(TransferStruct(msg.sender, reciver, amount, message, block.timestamp, keyword));
 emit  Transfer(msg.sender, reciver, amount, message, block.timestamp, keyword);
}

function getAllTransactions() public view returns (TransferStruct[] memory){
    return transfers;

 }
 function getTransactionCount   () public view returns (uint256){
     return TransactionCount;
 }

 
}