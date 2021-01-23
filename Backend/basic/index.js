const express = require('express');
const MetaAuth = require('meta-auth');

const app = express();
const metaAuth = new MetaAuth();
var cors = require('cors')
app.use(cors()) // Use this after the variable declaration
//var engines = require('consolidate');
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', express.static('.'));
app.get('/auth/:MetaAddress', metaAuth, (req, res) => {
  console.log("show =>",req)
  // Request a message from the server
  if (req.metaAuth && req.metaAuth.challenge) {
    //console.log("req.metaAuth.challenge =>",req.metaAuth.challenge)
    console.log("req.metaAuth.challenge =>",req.params.MetaAddress)
    console.log("show =>",req.metaAuth.challenge)
    res.send(req.metaAuth.challenge)
  }
});

app.get('/auth/:MetaMessage/:MetaSignature', metaAuth, (req, res) => {
  //console.log("show =>",req)
  if (req.metaAuth && req.metaAuth.recovered) {
    // Signature matches the cache address/challenge
    // Authentication is valid, assign JWT, etc.
    console.log("show =>",req.metaAuth.recovered)
    res.send(req.metaAuth.recovered);
  } else {
    // Sig did not match, invalid authentication
    res.status(400).send();
  };
});

app.listen(5001, () => {
  console.log('Listening on port 5001')
})