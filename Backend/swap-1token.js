const Web3 = require('web3');
const { ChainId, Token, WETH, Fetcher, Route, Pair, Trade, TradeType, TokenAmount, Percent } = require('@uniswap/sdk');
const config = require('./config');
const Uniswap = require('./contracts/uniswap');

const { infura, walletInfo } = config;

const web3 = new Web3(infura.endpoint);
const uniswapContract = Uniswap(web3);

const chainId = ChainId.KOVAN;
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
    const amount = '0.005';
    console.log("amount", amount)
    const amountIn = web3.utils.toWei(amount, 'ether')
    const trade = new Trade(route, new TokenAmount(WETH[chainId], amountIn), TradeType.EXACT_INPUT)

    const price = trade.executionPrice.toSignificant(6);
    console.log(`Trade ${amount} ETH to ` + price * amount + ` MKR`);
    const slippageTolerance = new Percent('100') // 50 bips, or 0.50%
    const amountOutMin = trade.minimumAmountOut(slippageTolerance).raw.toString()
    const path = [WETH[MKR.chainId].address, MKR.address]
    const to = walletInfo.address
    const deadline = Math.floor(Date.now() / 1000) + 60 * 20
    const value = trade.inputAmount.raw.toString()
    console.log(path);
    console.log(trade.inputAmount.raw.toString());
    const res = await uniswapContract.methods.swapExactETHForTokens(
        amountOutMin,
        path,
        to,
        deadline,
        { from: walletInfo.address, privateKey: walletInfo.privateKey, value },
    )

    console.log('res', res);
}

main();