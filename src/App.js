import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CurrentPriceList from './components/current_price_list';
import DailyHigh from './components/daily_high';
import InstantBtcPrice from './components/instant_btc_price'
import Currency from './components/currency'

const tickerUrl = "https://api.gdax.com/products/"

const gdaxCoins = ["btc", "bch", "ltc", "eth"]

const gdaxHighUrl = "https://api.gdax.com/products/" // + "btc-usd" + "/stats"

const btcSocketPrice = "http://localhost:45566/btcprice"

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      currency: "usd",
      currentTickers: {
      currentBtcTicker: {},
      currentLtcTicker: {},
      currentEthTicker: {},
      currentBchTicker: {}
      },
      btcHigh: null,
      ltcHigh: null,
      ethHigh: null,
      bchHigh: null,
      btcSocketPrice: null
    }

    gdaxCoins.forEach((coin) => {
      this.currentPriceRequest(tickerUrl + coin + "-"  +this.state.currency + "/ticker", ("current"+ coin[0].toUpperCase() + coin[1] + coin[2] +  "Ticker"));
    })

    setInterval(() => {this.socketRequest(btcSocketPrice)}, 50)


    setTimeout(() => {
      gdaxCoins.forEach((coin) => {
        this.dailyHighRequest(gdaxHighUrl + coin + "-" + this.state.currency + "/stats", coin + "High")
      })
    }, 1100)


    setInterval(() => {gdaxCoins.forEach((coin) => {
      this.currentPriceRequest(tickerUrl + coin + "-"  +this.state.currency + "/ticker", ("current"+ coin[0].toUpperCase() + coin[1] + coin[2] +  "Ticker"));
    })}
    , 10100)
    // setInterval(() => {this.currentPriceRequest(ltcUrl + this.state.currency + "/ticker","currentLtcTicker")}, 10100)
    // setInterval(() => {this.currentPriceRequest(ethUrl + this.state.currency + "/ticker","currentEthTicker")}, 10100)
    // setInterval(() => {this.currentPriceRequest(bchUrl + this.state.currency + "/ticker","currentBchTicker")}, 10100)
  };

  currentPriceRequest(url,coin) {
      // need to use arrow functions with fetch to have 'this' lexically scoped to component
      fetch(url).then((response) => {
          return response.json();
      }).then((myJson) => {
          myJson.coin = coin.slice(7, 10).toLowerCase();
          let price = Number(myJson.price);
          price = parseFloat(price);
          // below line was tricky to figure out for me with the square brackets.
          // I belive it works because the square brackets ge evaluated

          // below links helped me setState on object inside of state
          // https://stackoverflow.com/questions/27105257/storing-an-object-in-state-of-a-react-component
          // https://stackoverflow.com/questions/34956479/how-do-i-setstate-for-nested-array/34956745#34956745
          this.setState({
            currentTickers: {
              ...this.state.currentTickers,
              [coin]: myJson,
            },
          });

          this.setState({
            currentPrices: Object.assign({}, this.state.currentTickers, {
              [coin]: myJson,
            }),
          });
        }).catch(function(err) {
          console.log("the Gdax API call did not go through!! try again")
      })
  }

  // url (required), options (optional)
  dailyHighRequest(url, coin) {
      fetch(url).then((response) => {
          return response.json();
      }).then((myJson) => {
          let high = Number(myJson.high);
          high = parseFloat(high)
          this.setState({[coin]: high});
      }).catch((err) => {
          console.log("The API Call did not go through!! try again")
          // Error :(
      });
  }

  socketRequest(url){
  fetch(url).then((response) => {
    return response.json();
  }).then((myJson) => {
    this.setState({ btcSocketPrice: myJson})

  }).catch((err) => {
    console.log("the websocket API call did not go through!! try again")
  })

}

  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Crypto Price Man</h1>
          </header>
        </div>
        <div>
          <Currency
            currency={this.state.currency}
            onUsdClick={currency => (gdaxCoins.forEach((coin) => {
              this.currentPriceRequest(tickerUrl + coin + "-"  +"usd" + "/ticker", ("current"+ coin[0].toUpperCase() + coin[1] + coin[2] +  "Ticker"));
            }),this.setState({currency: "usd"})) }
            onEurClick={currency => (gdaxCoins.forEach((coin) => {
              this.currentPriceRequest(tickerUrl + coin + "-"  +"eur" + "/ticker", ("current"+ coin[0].toUpperCase() + coin[1] + coin[2] +  "Ticker"));
            }),this.setState({currency: "eur"})) }
          />
          <CurrentPriceList
            currency={this.state.currency}
            currentPriceList={this.state.currentTickers}
            btcHigh={this.state.btcHigh}
            ltcHigh={this.state.ltcHigh}
            ethHigh={this.state.ethHigh}
            bchHigh={this.state.bchHigh}
          />
          <InstantBtcPrice btcSocketPrice={this.state.btcSocketPrice} />
        </div>
      </div>
    );
  }
}

export default App;
