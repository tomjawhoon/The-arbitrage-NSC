const express = require('express')
const app = express()
const Web3 = require("web3");
const { ChainId, Token, WETH, Fetcher, Route, Trade, TokenAmount, TradeType, Percent } = require('@uniswap/sdk')
const { getNetwork } = require('@ethersproject/networks')
const { getDefaultProvider, InfuraProvider } = require('@ethersproject/providers')
const config = require('./config');
const Uniswap = require('./contracts/uniswap');
const { infura, walletInfo } = config;
const chainId = ChainId.KOVAN;
const web3 = new Web3(infura.endpoint);
const uniswapContract = Uniswap(web3);
const MetaAuth = require("meta-auth");
var cors = require('cors')
app.use(cors()) // Use this after the variable declaration
//var engines = require('consolidate');
const bodyParser = require('body-parser');
const cons = require('consolidate');
const metaAuth = new MetaAuth({
    banner: "Example Site Banner"
});
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/totalcoin', (req, res) => {
    const getExecutionPrice = async (baseToken, baseDecimal, quoteToken, quoteDecimal, tradeAmount, chainId, infuraKey) => {
        if (chainId == undefined) {
            chainId = ChainId.MAINNET
        }
        let network
        if (infuraKey != undefined) {
            network = new InfuraProvider(getNetwork(chainId), infuraKey)
        } else {
            network = getDefaultProvider(getNetwork(chainId))
        }
        let base = new Token(chainId, baseToken, baseDecimal),
            quote = new Token(chainId, quoteToken, quoteDecimal),
            pair = await Fetcher.fetchPairData(quote, base, network),
            route = await new Route([pair], base),
            base2quote = await route.midPrice.toSignificant(6),
            quote2base = await route.midPrice.invert().toSignificant(6),
            trade = new Trade(route, new TokenAmount(base, tradeAmount), TradeType.EXACT_INPUT)
        return trade.executionPrice.toSignificant(6)
    }

    const main = async () => {
        //const WETH =  0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;
        //const DAI = 0x6B175474E89094C44Da98b954EedeAC495271d0F;
        //const OMG = 0xd26114cd6ee289accf82350c8d8487fedb8a0c07
        //const MKR = 0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2
        //const USDT = 0x8dd5fbce2f6a956c3022ba3663759011dd51e73e
        let data
        const amount = req.body.valueinput;
        //console.log("amount amount amount ", amount)
        const frontend_value = amount;
        console.log("show <====  ", frontend_value)
        //WETH <== DAI
        // data = await getMidPrice("0xd26114cd6ee289accf82350c8d8487fedb8a0c07", 18, "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2", 18)
        // console.log("SHOW", data)
        //WETH <== DAI
        data = await getExecutionPrice(req.body.fromtoken, 18, req.body.totoken, 18, web3.utils.toWei(frontend_value, 'ETHER'))
        console.log("1 DAI = 1 WETH <===", data)
        console.log(`1 DAI = 1 WETH * ${frontend_value}-->`, data * frontend_value)

        const result = JSON.stringify(data * frontend_value);
        console.log(`result-->`, result)
        res.send(result)
    }
    main()
    module.exports = {
        getExecutionPrice: getExecutionPrice,
    }
})

app.get("/auth/:MetaAddress", metaAuth, (req, res) => {
    console.log("show MetaAddress ", req.metaAuth)
    console.log("show MetaAddress ", req)
    // Request a message from the server
    if (req.metaAuth && req.metaAuth.challenge) {
        console.log("INPUT 2 2 2 2")
        res.send(req.metaAuth.challenge);

    }
});

app.get("/auth/:MetaMessage/:MetaSignature", metaAuth, (req, res) => {
    // console.log("show MetaAddress ", req)
    if (req.metaAuth && req.metaAuth.recovered) {
        // Signature matches the cache address/challenge
        // Authentication is valid, assign JWT, etc.
        res.send(req.metaAuth.recovered);
    } else {
        // Sig did not match, invalid authentication
        res.status(400).send();
    }
});
app.post('/testgetdata', (req, res) => {
    const getExecutionPrice = async (baseToken, baseDecimal, quoteToken, quoteDecimal, tradeAmount, chainId, infuraKey) => {
        if (chainId == undefined) {
            chainId = ChainId.MAINNET
        }
        let network
        if (infuraKey != undefined) {
            network = new InfuraProvider(getNetwork(chainId), infuraKey)
        } else {
            network = getDefaultProvider(getNetwork(chainId))
        }
        let base = new Token(chainId, baseToken, baseDecimal),
            quote = new Token(chainId, quoteToken, quoteDecimal),
            pair = await Fetcher.fetchPairData(quote, base, network),
            route = await new Route([pair], base),
            base2quote = await route.midPrice.toSignificant(6),
            quote2base = await route.midPrice.invert().toSignificant(6),
            trade = new Trade(route, new TokenAmount(base, tradeAmount), TradeType.EXACT_INPUT)
        return trade.executionPrice.toSignificant(6)
    }

    const main = async () => {
        //const WETH =  0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;
        //const DAI = 0x6B175474E89094C44Da98b954EedeAC495271d0F;
        //const OMG = 0xd26114cd6ee289accf82350c8d8487fedb8a0c07
        //const MKR = 0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2
        //const USDT = 0x8dd5fbce2f6a956c3022ba3663759011dd51e73e
        let data

        //const inputAmount = web3.utils.toWei('0.05', 'ETHER')
        //const test = web3.utils.fromWei(inputAmount, 'Ether')
        // console.log("test =>",test)

        const amount = req.body.valueinput;
        console.log("amount amount amount ", amount)
        const test = amount;
        console.log("show ==== amount ", test)
        //WETH <== DAI
        // data = await getMidPrice("0xd26114cd6ee289accf82350c8d8487fedb8a0c07", 18, "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2", 18)
        // console.log("SHOW", data)
        //WETH <== DAI
        data = await getExecutionPrice("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", 18, "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2", 18, web3.utils.toWei(test, 'ETHER'))
        console.log("1 DAI = 1 WETH-->", data)
        console.log(`1 DAI = 1 WETH * ${test}-->`, data * test)
        const result = JSON.stringify(data * test);
        res.send(result)
        //OMG <== DAI
        // data = await getMidPriceViaETH("0xd26114cd6ee289accf82350c8d8487fedb8a0c07", 18, "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2", 18)
        // console.log("SHOW", data)
        // // // //OMG <== DAI
        // data = await getExecutionPriceViaETH("0xd26114cd6ee289accf82350c8d8487fedb8a0c07", 18, "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2", 18, "1000000000")
        // console.log("1 OMG = 1 DAI -->", data)
    }
    main()
    module.exports = {
        getExecutionPrice: getExecutionPrice,
    }



})

app.post('/swapcoin', (req, res) => {
    console.log("INPUT swapcoin ")
    console.log("req.body.valueswap", req.body.valueinput)
    const tokens = {
        dai: {
            address: '0xC4375B7De8af5a38a93548eb8453a498222C4fF2',
            decimals: 18
        },
        usdc: {
            address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
            decimals: 6
        },
        lcn: {
            address: '0x0b3df94f9a997981c5ad52b0a16a26f6bb6039ed',
            decimals: 10
        },
        mkr: {
            address: '0xaaf64bfcc32d0f15873a02163e7e500671a4ffcd',
            decimals: 18
        },

        knc: {
            address: '0xad67cB4d63C9da94AcA37fDF2761AaDF780ff4a2',
            decimals: 18
        },

        omg: {
            address: '0xd26114cd6ee289accf82350c8d8487fedb8a0c07',
            decimals: 18
        }



    }

    const DAI = new Token(chainId, tokens.dai.address, tokens.dai.decimals);
    const USDC = new Token(chainId, tokens.usdc.address, tokens.usdc.decimals);
    const LCN = new Token(chainId, tokens.lcn.address, tokens.lcn.decimals);
    const MKR = new Token(chainId, tokens.mkr.address, tokens.mkr.decimals);
    const KNC = new Token(chainId, tokens.knc.address, tokens.knc.decimals);
    const OMG = new Token(chainId, tokens.omg.address, tokens.omg.decimals);


    const main = async () => {
        // const USDCWETHPair = await Fetcher.fetchPairData(USDC, WETH[ChainId.MAINNET])
        // const DAIUSDCPair = await Fetcher.fetchPairData(DAI, USDC)
        // const WETHDAIPair = await Fetcher.fetchPairData(DAI, WETH[chainId]);
        // const route = new Route([DAIUSDCPair], DAI);
        // const trade = new Trade(route, new TokenAmount(DAI, '1000000000000000000'), TradeType.EXACT_INPUT)
        const MKRWETHPair = await Fetcher.fetchPairData(MKR, WETH[chainId]);
        const route = new Route([MKRWETHPair], WETH[chainId]);
        const numbercoin = req.body.valueinput;
        const amount = numbercoin;
        console.log("amountamountamountamountamountamountamountamountamountamountamount", amount)
        const amountIn = web3.utils.toWei(amount, 'ether')
        const trade = new Trade(route, new TokenAmount(WETH[chainId], amountIn), TradeType.EXACT_INPUT)
        console.log(`Trade ${amount} ETH to ` + trade.executionPrice.toSignificant(6) + ` MKR`);
        const slippageTolerance = new Percent('100') // 50 bips, or 0.50%
        const amountOutMin = trade.minimumAmountOut(slippageTolerance).raw.toString()
        const path = [WETH[MKR.chainId].address, MKR.address]
        const to = walletInfo.address
        const deadline = Math.floor(Date.now() / 1000) + 60 * 20
        const value = trade.inputAmount.raw.toString()
        console.log(path);
        console.log(trade.inputAmount.raw.toString());
        const transaction = await uniswapContract.methods.swapExactETHForTokens(
            amountOutMin,
            path,
            to,
            deadline,
            { from: walletInfo.address, privateKey: walletInfo.privateKey, value },
        )
        console.log('show transaction', transaction.transactionHash);
        res.send(transaction.transactionHash)
    }
    main();
})





app.listen(5001, () => {
    console.log('Start server at port 5001.')
})