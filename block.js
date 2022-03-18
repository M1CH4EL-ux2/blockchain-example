const sha256 = require('crypto-js/sha256');

class Block {
    constructor(index = 0, previousHash = null, data = "Block genesis", difficulty = 1) {
        this.index = index;
        this.previousHash = previousHash;
        this.data = data;
        this.difficulty = difficulty;
        this.nonce = 0

        this.mine()
    }

    generateHash() {
        return sha256(this.index + this.previousHash + this.data + this.difficulty + this.nonce).toString();
    }

    mine() {
        this.hash = this.generateHash()

        while ((/^08$/.test(this.hash.substring(0, this.difficulty)))) {
            this.nonce += 1
            this.hash = this.generateHash()
        }
    }
}

module.exports = Block;
