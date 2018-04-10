var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var Block = new Schema(
{
    "number": {type: Number, index: {unique: true}},
    "hash": String,
    "parentHash": String,
    "nonce": String,
    "sha3Uncles": String,
    "logsBloom": String,
    "transactionsRoot": String,
    "stateRoot": String,
    "receiptRoot": String,
    "miner": String,
    "difficulty": String,
    "totalDifficulty": String,
    "size": Number,
    "extraData": String,
    "gasLimit": Number,
    "gasUsed": Number,
    "timestamp": Number,
    "uncles": [String]
});

var Contract = new Schema(
{
    "address": {type: String, index: {unique: true}},
    "ERC":Number,//0:normal contract 2:ERC20, 3:ERC223
    "creationTransaction": String,
    "contractName": String,
    "symbol": String,
    "owner": String,
    "decimals": Number,
    "totalSupply": Number,
    "balance": Number,
    "compilerVersion": String,
    "optimization": Boolean,
    "sourceCode": String,
    "abi": String,
    "byteCode": String
}, {collection: "Contract"});

var Transaction = new Schema(
{
    "hash": {type: String, index: {unique: true}},
    "nonce": Number,
    "blockHash": String,
    "blockNumber": Number,
    "transactionIndex": Number,
    "from": String,
    "to": String,
    "value": String,
    "gas": Number,
    "contractAddress":String,
    "gasUsed":Number,
    "gasPrice": String,
    "timestamp": Number,
    "input": String
});

//代币交易表
var TokenTransfer = new Schema(
    {
        "transactionHash": String,
        "blockNumber": Number,
        "amount": Number,
        "contractAdd": String,
        "to": String,
        "from": String,
        "timestamp": Number
    });
mongoose.model('TokenTransfer', TokenTransfer);
var TokenTransferClass = mongoose.model('TokenTransfer');

mongoose.model('Block', Block);
mongoose.model('Contract', Contract);
mongoose.model('Transaction', Transaction);
module.exports.Block = mongoose.model('Block');
module.exports.Contract = mongoose.model('Contract');
module.exports.Transaction = mongoose.model('Transaction');
module.exports.TokenTransfer = TokenTransferClass;

mongoose.connect( 'mongodb://localhost/blockDB' );
mongoose.set('debug', false);
