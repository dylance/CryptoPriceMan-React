const fetch = require('node-fetch');

const express = require('express');
const app = express();
// npm install coinbase/gdax-node
const Gdax = require('gdax');
const websocket = new Gdax.WebsocketClient(['BTC-USD']);
const cors = require('cors')

app.use(cors())

const port = 45566;

let btcTicker = {}

app.use(require('compression')());
app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({ extended:true }));

app.use(express.static('build'));

var priceOfBtc = '';

websocket.on('message', data => {
 priceOfBtc = data.price;
});
websocket.on('error', err => {
 /* handle error */
});
websocket.on('close', () => {
 /* ... */
});

currentPriceRequest("https://api.gdax.com/products/btc-usd/ticker");

setInterval(() => {
  currentPriceRequest("https://api.gdax.com/products/btc-usd/ticker");
}, 10100)



app.get('/btcprice', (req, res) => {
 res.send(priceOfBtc)
})

app.get('/btcticker', (req, res) => {
 res.send(btcTicker)
})

// app.listen(port, () => console.log(`Listening on port ${port}`));
app.listen(port, console.log('data on 45566/btcprice'))


//
// Response {
//   size: 0,
//   timeout: 0,
//   [Symbol(Body internals)]:
//    { body:
//       Gunzip {
//         _readableState: [Object],
//         readable: true,
//         domain: null,
//         _events: [Object],
//         _eventsCount: 7,
//         _maxListeners: undefined,
//         _writableState: [Object],
//         writable: true,
//         allowHalfOpen: true,
//         _transformState: [Object],
//         bytesRead: 0,
//         _opts: [Object],
//         _chunkSize: 16384,
//         _flushFlag: 2,
//         _finishFlushFlag: 2,
//         _scheduledFlushFlag: 0,
//         _handle: [Object],
//         _hadError: false,
//         _buffer: <Buffer 7b 22 74 72 61 64 65 5f 69 64 22 3a 34 32 37 32 31 36 37 34 2c 22 70 72 69 63 65 22 3a 22 39 30 38 36 2e 35 35 30 30 30 30 30 30 22 2c 22 73 69 7a 65 ... >,
//         _offset: 0,
//         _level: -1,
//         _strategy: 0 },
//      disturbed: false,
//      error: null },
//   [Symbol(Response internals)]:
//    { url: 'https://api.gdax.com/products/btc-usd/ticker',
//      status: 200,
//      statusText: 'OK',
//      headers: Headers { [Symbol(map)]: [Object] } } }
//
//      response.[Symbol(Response internals)].status == 200


function currentPriceRequest(url) {
    // need to use arrow functions with fetch to have 'this' lexically scoped to component
    fetch(url).then((response) => {
        //console.log(response)

        if (response.status == 200){
        return response.json();
      }
    }).then((myJson) => {
        if (myJson){
          btcTicker = myJson;
       }
    }).catch(function(err) {
        console.log("the Gdax API call did not go through!! try again")
    })
}
