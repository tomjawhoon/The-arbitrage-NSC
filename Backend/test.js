const express = require('express')
const app = express()
const Web3 = require("web3");
const { ChainId, Token, WETH, Fetcher, Route, Trade, TokenAmount, TradeType } = require('@uniswap/sdk')
const { getNetwork } = require('@ethersproject/networks')
const { getDefaultProvider, InfuraProvider } = require('@ethersproject/providers')
const infura =
{
    projectId: '37dd526435b74012b996e147cda1c261',
    projectSecret: '55c6430534c042a1b762cd5f6e0f0a55',
    endpoint: "wss://kovan.infura.io/ws/v3/37dd526435b74012b996e147cda1c261"
}
const web3 = new Web3(infura.endpoint);
var cors = require('cors')
app.use(cors()) // Use this after the variable declaration
//var engines = require('consolidate');
const bodyParser = require('body-parser');
const cons = require('consolidate');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.post('/testgetdata', (req, res) => {
    console.log("show ===> Value", req)
    console.log("req.body.name =>", req.body.name)
    console.log("req.body.number =>", req.body.number)
    console.log("INPUT --->getprice ")

    const getMidPrice = async (baseToken, baseDecimal, quoteToken, quoteDecimal, chainId, infuraKey) => {
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
            quote2base = await route.midPrice.invert().toSignificant(6)
        //console.log("route",route)
        return {
            base2quote: base2quote, //เหรียญ 1
            quote2base: quote2base //เหรียญ 2
        }

    }

    const getExecutionPrice = async (baseToken, baseDecimal, quoteToken, quoteDecimal, tradeAmount, chainId, infuraKey) => {
        /*console.log("baseToken ===", baseToken)
        console.log("baseDecimal ===", baseDecimal)
        console.log("quoteToken ===", quoteToken)
        console.log("quoteDecimal ===", quoteDecimal)
        console.log("tradeAmount ===", tradeAmount)
        console.log("chainId ===", chainId)
        console.log("infuraKey ===", infuraKey)*/

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
    const getMidPriceViaETH = async (baseToken, baseDecimal, quoteToken, quoteDecimal, chainId, infuraKey) => {
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
            quoteWETH = await Fetcher.fetchPairData(quote, WETH[chainId], network),
            WETHbase = await Fetcher.fetchPairData(WETH[chainId], base, network),
            route = await new Route([WETHbase, quoteWETH], base),
            base2quote = await route.midPrice.toSignificant(6),
            quote2base = await route.midPrice.invert().toSignificant(6)

        return {
            base2quote: base2quote, //เหรียญ 1
            quote2base: quote2base  //เหรียญ 2
        }

    }
    const getExecutionPriceViaETH = async (baseToken, baseDecimal, quoteToken, quoteDecimal, tradeAmount, chainId, infuraKey) => {
        console.log("teaddd =>", tradeAmount)
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
            quoteWETH = await Fetcher.fetchPairData(quote, WETH[chainId], network),
            WETHbase = await Fetcher.fetchPairData(WETH[chainId], base, network),
            route = await new Route([WETHbase, quoteWETH], base),
            base2quote = await route.midPrice.toSignificant(6),
            quote2base = await route.midPrice.invert().toSignificant(6),
            trade = new Trade(route, new TokenAmount(base, tradeAmount), TradeType.EXACT_INPUT)
        //console.log("trade =>", trade.executionPrice)
        return trade.executionPrice.toSignificant(6) //ค่ากลางข้อง ทั้ง 2 เหรียญ
    }

    const getMidPriceViaExactToken = async (baseToken, baseDecimal, quoteToken, quoteDecimal, midToken, midDecimal, chainId, infuraKey) => {
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
            mid = new Token(chainId, midToken, midDecimal)
        quoteMid = await Fetcher.fetchPairData(quote, mid, network),
            midBase = await Fetcher.fetchPairData(mid, base, network),
            route = await new Route([midBase, quoteMid], base),
            base2quote = await route.midPrice.toSignificant(6),
            quote2base = await route.midPrice.invert().toSignificant(6)

        return {
            base2quote: base2quote, //เหรียญ 1
            quote2base: quote2base  //เหรียญ 2
        }

    }
    const getExecutionPriceViaExactToken = async (baseToken, baseDecimal, quoteToken, quoteDecimal, midToken, midDecimal, tradeAmount, chainId, infuraKey) => {
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
            mid = new Token(chainId, midToken, midDecimal)
        quoteMid = await Fetcher.fetchPairData(quote, mid, network),
            midBase = await Fetcher.fetchPairData(mid, base, network),
            route = await new Route([midBase, quoteMid], base),
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

        const amount = req.body.number;
        const test = JSON.stringify(amount);
        console.log("show ==== amount ",test)
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
        getMidPrice: getMidPrice,
        getExecutionPrice: getExecutionPrice,
        getMidPriceViaETH: getMidPriceViaETH,
        getExecutionPriceViaETH: getExecutionPriceViaETH,
        getMidPriceViaExactToken: getMidPriceViaExactToken,
        getExecutionPriceViaExactToken: getExecutionPriceViaExactToken,
    }



})

app.listen(5001, () => {
    console.log('Start server at port 5001.')
})