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
        address: '0xc4375b7de8af5a38a93548eb8453a498222c4ff2',
        decimals: 18
    },
    usdc: {
        address: '0x7079f3762805cff9c979a5bdc6f5648bcfee76c8',
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
    }

}

const DAI = new Token(chainId, tokens.dai.address, tokens.dai.decimals);
const USDC = new Token(chainId, tokens.usdc.address, tokens.usdc.decimals);
const LCN = new Token(chainId, tokens.lcn.address, tokens.lcn.decimals);
const MKR = new Token(chainId, tokens.mkr.address, tokens.mkr.decimals);
const KNC = new Token(chainId, tokens.knc.address, tokens.knc.decimals);

const main = async () => {

    // const USDCWETHPair = await Fetcher.fetchPairData(USDC, WETH[ChainId.MAINNET])
    // const DAIUSDCPair = await Fetcher.fetchPairData(DAI, USDC)
    // const WETHDAIPair = await Fetcher.fetchPairData(DAI, WETH[chainId]);
    // const route = new Route([DAIUSDCPair], DAI);
    // const trade = new Trade(route, new TokenAmount(DAI, '1000000000000000000'), TradeType.EXACT_INPUT)

    console.log("Test");
    

    const DAIWETHPair = await Fetcher.fetchPairData(DAI, WETH[chainId]);
    const KNCWETHPair = await Fetcher.fetchPairData(KNC,  WETH[chainId]);
    console.log("Test2", KNCWETHPair);


    const route = new Route([DAIWETHPair, KNCWETHPair], DAI);

    const amount = '0.00001';
    const amountIn = web3.utils.toWei(amount, 'ether')
    console.log("show =>",amountIn)

    const trade = new Trade(route, new TokenAmount(DAI, amountIn), TradeType.EXACT_INPUT)

    console.log(`Trade ${amountIn} DAI to ` + trade.executionPrice.toSignificant(12) + ` KNC`);

    const slippageTolerance = new Percent('100') // 50 bips, or 0.50%

    const amountOut = trade.minimumAmountOut(slippageTolerance).raw.toString();
    const amountInMax = trade.maximumAmountIn(slippageTolerance).raw.toString();

    const path = [DAI.address, WETH[chainId].address, KNC.address]
    const to = walletInfo.address
    const deadline = Math.floor(Date.now() / 1000) + 60 * 20
    const value = trade.inputAmount.raw.toString();

    console.log({
        amountOut,
        amountInMax,
    });
    
    const res = await uniswapContract.methods.swapTokensForExactTokens(
        amountOut,
        amountInMax,
        path,
        to,
        deadline,
        { from: walletInfo.address, privateKey: walletInfo.privateKey, value }
    )

    console.log('res', res);
}

main();