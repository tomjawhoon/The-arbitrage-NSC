const express = require('express');
//const soap = require('soap');
const bodyParser = require('body-parser')
const url = 'https://passport.psu.ac.th/authentication/authentication.asmx?wsdl';
const app = express()
const router = express.Router()
const Web3 = require("web3");
const fs = require('fs');
const path = require('path');
const EthereumTx = require('ethereumjs-tx').Transaction;
const Buffer = require('safer-buffer').Buffer;
const cors = require('cors');
const { ChainId, Token, WETH, Fetcher, Route, Trade, TokenAmount, TradeType } = require('@uniswap/sdk')
const { getNetwork } = require('@ethersproject/networks')
//const web3 = require('web3');
const { getDefaultProvider, InfuraProvider } = require('@ethersproject/providers')
const infura =
{
    projectId: '37dd526435b74012b996e147cda1c261',
    projectSecret: '55c6430534c042a1b762cd5f6e0f0a55',
    endpoint: "wss://kovan.infura.io/ws/v3/37dd526435b74012b996e147cda1c261"
}
const web3 = new Web3(infura.endpoint);
// <!--===============================================================================================-->
app.use(cors());
var engines = require('consolidate');
app.use('/api', router);
app.use('/front', express.static(path.join(__dirname, 'front')));
app.set('views', __dirname + '/');
app.engine('html', engines.mustache);
app.set('view engine', 'html');
var Web3EthAccounts = require('web3-eth-accounts');
var firebase = require('firebase');
const cons = require('consolidate');
app.use(bodyParser.urlencoded({ extended: true }), router)
app.use(bodyParser.json, router)
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
//app.use(bodyParser.json({ type: 'X-Foo', 'bar'}))
// app.use(bodyParser.json(200, { 'Content-Type': 'text/plain' }))
// app.use(function (req, res, next) {
//     console.log(req.body) // populated!
// })

// <!--===============================================================================================-->
/*var firebaseConfig = {
    apiKey: "AIzaSyDPwR_Tlxe5MODIEPugWCnO_drEh6-4jjw",
    authDomain: "login-psu-final.firebaseapp.com",
    databaseURL: "https://login-psu-final.firebaseio.com",
    projectId: "login-psu-final",
    storageBucket: "login-psu-final.appspot.com",
    messagingSenderId: "152285332333",
    appId: "1:152285332333:web:bc428892887d5004"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();*/
// <!--===============================================================================================-->
router.route('/')
    .get((req, res) => {
        res.render('PSULOGIN.html')
    })
    .post((req, res) => {
 
    })


router.route('getprice')
    /* .get((req, res) => {
         res.render('PSULOGIN.html')
     })*/
    .post((req, res) => {
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

           // const amount = "10";
            const amount = req.amount;
            //WETH <== DAI
            // data = await getMidPrice("0xd26114cd6ee289accf82350c8d8487fedb8a0c07", 18, "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2", 18)
            // console.log("SHOW", data)
            //WETH <== DAI
            data = await getExecutionPrice("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", 18, "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2", 18, web3.utils.toWei(amount, 'ETHER'))
            console.log("1 DAI = 1 WETH-->", data)
            console.log(`1 DAI = 1 WETH * ${amount}-->`, data * amount)
            res.redirect('/indexadmin/' + data)
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

router.route('/loginadmin')
    .post((req, res) => {
        let user = {}
        user.username = req.body.username
        user.password = req.body.password
        user.name = req.body.name
        user.surname = req.body.surname
        console.log("user.username", user.username)
        console.log("user.password", user.password)
        console.log("user.name", user.name)
        console.log("user.surname", user.surname)
        if (user.username != "") { //เข้ารหัสผิดดดดด ๆ 
            database.ref('users').child(user.username).once("value", snapshot => {
                if (snapshot.exists()) { // check ????????????????????????
                    console.log('already exists')
                    // res.send('<script>alert("??????????????????");</script>');
                    res.redirect('/indexadmin/' + user.username)
                    return false;
                } else {
                    console.log('Error admin')
                    res.redirect('/error')
                }
            })
        }

    })


router.route('/register')
    .post((req, res) => {

        let user = {}
        user.username = req.body.username
        user.password = req.body.password
        user.name = req.body.name
        user.surname = req.body.surname
        console.log("user.username", user.username)
        console.log("user.password", user.password)
        console.log("user.name", user.name)
        console.log("user.surname", user.surname)


        if (user.username != "") { //เข้ารหัสผิดดดดด ๆ 
            //เข้ารหัสถูกกกกกกก แล้วจร้า
            var account = new Web3EthAccounts('ws://kovan.infura.io/v3/37dd526435b74012b996e147cda1c261');
            var user_eth = account.create();

            //console.log("Show_profile ", response)
            database.ref('users').child(user.username).once("value", snapshot => {
                if (snapshot.exists()) { // check ????????????????????????
                    console.log('already exists')
                    // res.send('<script>alert("??????????????????");</script>');
                    //res.redirect('/index/' + user.username)
                    return false;
                } else {
                    // let string = []
                    console.log('bad bad')
                    const newObject = {
                        address: user_eth.address,
                        privateKey: user_eth.privateKey.substring(2).toUpperCase(),
                        balance: "",
                        pass: user.password,
                        name: {
                            GetStaffDetailsResult: {
                                string: [user.username, user.username, user.surname, "60"]
                            }
                        }
                    }
                    database.ref('users').child(user.username).set(newObject).then(() => {
                        console.log('create new wallet')
                        res.redirect('/index/' + user.username)
                        return false;
                    })

                    // database.ref('users').child(user.username).set({
                    //     address: user_eth.address,
                    //     privateKey: user_eth.privateKey.substring(2).toUpperCase(),
                    //     balance: "",
                    //     name: user.username,
                    //     surname: user.surname,
                    //     pass: user.password
                    // }).then(() => {
                    //     console.log('create new wallet')
                    //     res.redirect('/adminlogin')
                    //     return false;
                    // }).catch(e => {
                    //     console.log(e)
                    // })
                }
            })

        }



    })
// <!--===============================================================================================-->
router.route('/send/:id')
    .get((req, res) => {
        res.render('tranfer.html')
    })

router.route('/send/:id/confirm')
    .get((req, res) => {
        async function Tranfer() {
            // const id = req.headers.toaddress;

            const id = req.headers.toaddress;
            const fromAddress = req.headers.fromaddress;
            const money = req.headers.money;
            const privateKey = req.headers.privatekey;
            const id_sender = req.headers.id;
            let testid = "IDERROR"
            const startTime = new Date().valueOf()
            console.log("startTime ======================== >", startTime) //
            console.log("id", id) //to id 
            //////////////////////////// sender ///////////////////////////////////////////////////
            console.log("id_sender", id_sender)
            const toAddress_sender = await getReceiverWalletFromId(id_sender)
            let id_sendershow = toAddress_sender.val();
            let id_sendershow_balance = id_sendershow.balance;
            console.log("id_sendershow_balance =>", id_sendershow_balance)
            //////////////////////////// sender ///////////////////////////////////////////////////

            //let totalvalue = toAddress2.balance;
            console.log("testvalue === >", req.header.value1)
            console.log("fromAddress =>", fromAddress)
            console.log("money =>", money)
            console.log("privateKey =>", privateKey)
            //var id = string.match(/(\d){10}/gm)

            if (id == '') {
                console.log("TESTID")
                res.json(testid)
            }
            const toAddress = await getReceiverWalletFromId(id)
            console.log("toAddress_show_toAddress =>", toAddress)

            let toAddress2 = toAddress.val();
            let totalvalue = toAddress2.balance;
            let test = "ERROR";
            //let moneybalance = "moneybalance";

            console.log("toAddress2 =>", toAddress2)
            console.log("totalvalue =>", totalvalue)
            web3.setProvider(new web3.providers.HttpProvider("https://kovan.infura.io/v3/37dd526435b74012b996e147cda1c261"));
            var abi = JSON.parse(fs.readFileSync(path.resolve(__dirname, './abi.json'), 'utf-8'));
            var count = await web3.eth.getTransactionCount(fromAddress);
            var contractAddress = "0x0d01bc6041ac8f72e1e4b831714282f755012764";
            var contract = new web3.eth.Contract(abi, contractAddress, { from: fromAddress });
            if (money == '') {
                console.log("money..errorrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr")
                res.json(test)
            }

            else if (money > id_sendershow_balance) {
                console.log("MAX_MONEY..........................................")
                res.json(test)
            }


            else if (money < 0) {
                console.log("MIN_MONEY..........................................")
                res.json(test)
            }


            var weiTokenAmount = web3.utils.toWei(String(money), 'ether');
            var Transaction = {
                "from": fromAddress,
                "nonce": "0x" + count.toString(16),
                "gasPrice": web3.utils.toHex(web3.utils.toWei(String(1), 'gwei')),
                "gasLimit": "0x250CA",//151754
                "to": contractAddress,
                "value": "0x0",
                "data": contract.methods.transfer(toAddress2.address, weiTokenAmount).encodeABI(),
                "chainId": 0x03
            };
            var privKey = Buffer.from(privateKey, 'hex');
            console.log("privKey = > ", privKey);
            const tx = new EthereumTx(Transaction, { chain: 'kovan' });
            tx.sign(privKey);
            var serializedTx = tx.serialize();


            console.log("serializedTx =>", serializedTx)
            /////////////////////////////////////////////////// errrrorr //////////////////////////////////////////////////////////////////////////
            /*if (money <= id_sendershow_balance) {
                console.log("errorrrrrrrrrrrrrrrrrrrrrrrr.receipt")
                res.json(moneybalance)
            }*/

            var receipt = await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('transactionHash', () => { console.log('hashtime', new Date().valueOf() - startTime) })
                .on('receipt', () => { console.log('blocktime', new Date().valueOf() - startTime) })
            //const spendTime = new Date().valueOf() - startTime
            //console.log("spendTime_ฺHasTime ====================================================================================== =>", spendTime)
            console.log("receipt =>", receipt)
            res.json(JSON.stringify(receipt.transactionHash))
            database.ref('users').child(id).once("value", snapshot => {
                if (snapshot.exists()) {
                    console.log('Have_data')
                    database.ref('users').child(id).update({
                        balance: parseInt(req.headers.money) + parseInt(toAddress2.balance)
                    }).then(() => {
                        console.log('push_send_perfect')
                    }).catch(e => {
                        console.log(e)
                    })
                }
            })
            // return receipt
        }
        Tranfer().then((result) => {
            console.log(result)
        })


    })

app.listen(5001, () => console.log('Server is ready!'))


// 791786F6D865B4FAFAC0E92A5961D0526AF0072EFA757D5E46E59A69EF63FF70