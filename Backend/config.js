const blockchainNetwork = 'kovan';

const walletInfo = {
    address: '0x6c25FE295Ecee6F0D8D34fC28dca2de68538fA4a',
    privateKey: '0xE1C661DE87DF9B024A63EC2F47B041D76326082FFD7B26CEF6F100F901E232C3'
}

const infura = {
    projectId: '56575d0630714611aafed016ebe4d7e8',
    projectSecret: 'ecc8e34b65b149ebb3410d018ea48147',
    endpoint: `wss://${blockchainNetwork}.infura.io/ws/v3/56575d0630714611aafed016ebe4d7e8`
}

const config = {
    blockchainNetwork,
    walletInfo,
    infura
}

module.exports = config;