const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('f1b81a50690e4ca8a956fc4bc99f36625444fa4aec4fc4298a1df855cf180447')
const myWalletAddress = myKey.getPublic('hex');

let nuigBC = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'Public Key goes here', 10)
tx1.signTransaction(myKey);

nuigBC.addTransaction(tx1);


console.log('\n Starting the miner...');
nuigBC.minePendingTransactions(myWalletAddress);

console.log('\nBlance of fake address is ', nuigBC.getBalanceOfAddress(myWalletAddress));


