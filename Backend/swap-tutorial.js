const { ChainId, Fetcher, WETH, Route, Trade, TokenAmount, TradeType, Percent } = require('@uniswap/sdk');
const cons = require('consolidate');
const { ethers } = require('ethers');
const chainId = ChainId.KOVAN;
const tokenAddress = '0x6B175474E89094C44Da98b954EedeAC495271d0F'; //DAI

const init = async () => {
    console.log("IN")
    const dai = await Fetcher.fetchTokenData(chainId, tokenAddress)
    const weth = WETH[chainId];
    const pair = await Fetcher.fetchPairData(dai, weth)
    const route = new Route([pair], weth);
    const trade = new Trade(route, new TokenAmount(weth, '100000000000000000'), TradeType.EXACT_INPUT);
    console.log(route.midPrice.toSignificant(6))
    console.log(route.midPrice.invert().toSignificant(6))
    console.log(trade.executionPrice.toSignificant(6))
    console.log(trade.nextMidPrice.toSignificant(6))
    const slippageTolerance = new Percent('50', '10000');
    const amountOutMin = trade.minimumAmountOut(slippageTolerance).raw;
    const path = [weth.address, dai.address];
    const to = '0x6c25FE295Ecee6F0D8D34fC28dca2de68538fA4a';
    const deadline = Math.floor(Date.now() / 1000) + 60 * 20;
    const value = trade.inputAmount.raw;
    const provider = ethers.getDefaultProvider('mainnet', {
        infura: 'https://kovan.infura.io/v3/56575d0630714611aafed016ebe4d7e8'
    });
    const signer = new ethers.Wallet("0xE1C661DE87DF9B024A63EC2F47B041D76326082FFD7B26CEF6F100F901E232C3");
    const account = signer.connect(provider)
    const uniswap = new ethers.Contract(
        '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
        ['function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline) external payable returns (uint[] memory amounts)'],
        account)
    const tx = await uniswap.swapExactETHForTokens(
        amountOutMin,
        path,
        to,
        deadline,
        { value, gasprice: 20e9 }
    )
    console.log(`Transaction hash: ${tx.hash}`);
    const receipt = await tx.wait();
    console.log(`Transaction was mined in block ${receipt.blockNumber}`);
}

init();