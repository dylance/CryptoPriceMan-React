const express = require('express');
const app = express();
// npm install coinbase/gdax-node
const Gdax = require('gdax');
const websocket = new Gdax.WebsocketClient(['BTC-USD']);
const cors = require('cors')

app.use(cors())

const port = 45566;

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

app.get('/btcprice', (req, res) => {
 res.send(priceOfBtc)
})

// app.listen(port, () => console.log(`Listening on port ${port}`));
app.listen(port, console.log('data on 45566/btcprice'))
