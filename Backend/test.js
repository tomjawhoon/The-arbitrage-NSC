const express = require('express')
const app = express()
const Web3 = require("web3");
const router = express.Router()
const infura =
{
    projectId: '37dd526435b74012b996e147cda1c261',
    projectSecret: '55c6430534c042a1b762cd5f6e0f0a55',
    endpoint: "wss://kovan.infura.io/ws/v3/37dd526435b74012b996e147cda1c261"
}
const web3 = new Web3(infura.endpoint);
var cors = require('cors')
app.use(cors()) // Use this after the variable declaration
var engines = require('consolidate');
const bodyParser = require('body-parser')
app.set('views', __dirname + '/');
app.engine('html', engines.mustache);
app.set('view engine', 'html');
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
app.use(bodyParser.urlencoded({extended:true}))
//app.use(bodyParser.urlEncoded({extended:true}))
app.post('/testgetdata', (req, res) => {
    //console.log("req.number =>", req.header.number)
    console.log("req.body.number =>", req.body.number)
    //console.log("req.header.number =>", req.header.number)
    console.log("INPUT --->getprice ")
    res.send("Successfull")
})

app.listen(5001, () => {
    console.log('Start server at port 5001.')
})