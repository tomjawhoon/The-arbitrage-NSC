const Tx = require('ethereumjs-tx');
const Web3PromiEvent = require('web3-core-promievent');
const config = require('./config');

const getBlockchainNetwork = async (web3) => {
    const networkId = await web3.eth.net.getId();
    switch (networkId) {
        case 1: return 'mainnet';
        case 3: return 'ropsten';
        case 4: return 'rinkeby';
        case 42: return 'kovan';
        default: return '';
    }
}

const sender = (web3, contractAddress) => (methodData, { from, privateKey, value }) => {
    const promiEvent = Web3PromiEvent();

    async function create() {
        try {
            const data = methodData.encodeABI();
            const skBuffer = Buffer.from(privateKey.substr(2, privateKey.length), 'hex');

            // const estimatedGas = await methodData.estimateGas({ from });
            const estimatedGas = 1000000;

            console.log('gas', estimatedGas)

            const txObject = {
                nonce: await web3.eth.getTransactionCount(from, 'pending'),
                chainId: await web3.eth.net.getId(),
                gasLimit: web3.utils.toHex(Math.floor(estimatedGas * 5)),
                gasPrice: web3.utils.toHex(web3.utils.toWei('3', 'gwei')),
                from,
                to: contractAddress,
                data,
                value: web3.utils.toHex(value || '0')
            }

            const tx = new Tx.Transaction(txObject, { chain: config.blockchainNetwork });
            tx.sign(skBuffer);
            const serializedTx = tx.serialize()
            const raw = '0x' + serializedTx.toString('hex');

            web3.eth.sendSignedTransaction(raw)
                .on('transactionHash', (hash) => promiEvent.eventEmitter.emit('transactionHash', hash))
                .on('confirmation', (confirmationNumber, receipt) => promiEvent.eventEmitter.emit('confirmation', confirmationNumber, receipt))
                .on('receipt', (receipt) => promiEvent.eventEmitter.emit('receipt', receipt))
                .on('error', (error) => promiEvent.eventEmitter.emit('error', error))
                .then(receipt => promiEvent.resolve(receipt))
                .catch(error => promiEvent.reject(error))
        } catch (e) {
            promiEvent.reject(e)
        }
    }

    create();

    return promiEvent.eventEmitter;
}

module.exports = {
    getBlockchainNetwork,
    sender
}