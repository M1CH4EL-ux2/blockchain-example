const Blockchain = require('./blockchain');
const blockchain = new Blockchain();

console.log(blockchain);
blockchain.addBlock('Bloco 1');
console.log(blockchain);
blockchain.addBlock('Bloco 2');
console.log(blockchain);
blockchain.addBlock('Bloco 3');
console.log(blockchain);

console.log(blockchain.isValid());
