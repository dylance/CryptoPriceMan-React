import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CurrentPriceList from './components/current_price_list';
import DailyHigh from './components/daily_high';

const btcUrl = "https://api.gdax.com/products/BTC-USD/ticker";
const ltcUrl = "https://api.gdax.com/products/LTC-USD/ticker";
const ethUrl = "https://api.gdax.com/products/ETH-USD/ticker";
const bchUrl = "https://api.gdax.com/products/BCH-USD/ticker";

const btcHighUrl = "https://api.gdax.com/products/btc-usd/stats"
const ltcHighUrl = "https://api.gdax.com/products/ltc-usd/stats"
const ethHighUrl = "https://api.gdax.com/products/eth-usd/stats"
const bchHighUrl = "https://api.gdax.com/products/bch-usd/stats"

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentPrices: {
      currentBtcPrice: 9000,
      currentLtcPrice: null,
      currentEthPrice: null,
      currentBchPrice: null
      },
      btcHigh: null,
      ltcHigh: null,
      ethHigh: null,
      bchHigh: null
    }


    this.currentPriceRequest(btcUrl, "currentBtcPrice");
    this.currentPriceRequest(ltcUrl, "currentLtcPrice");
    this.currentPriceRequest(ethUrl, "currentEthPrice");
    this.currentPriceRequest(bchUrl, "currentBchPrice");

    this.dailyHighRequest(btcHighUrl, "btcHigh");
    this.dailyHighRequest(ltcHighUrl, "ltcHigh");
    this.dailyHighRequest(ethHighUrl, "ethHigh");

    setInterval(() => {this.currentPriceRequest(btcUrl,"currentBtcPrice")}, 10100)
    setInterval(() => {this.currentPriceRequest(ltcUrl,"currentLtcPrice")}, 10100)
    setInterval(() => {this.currentPriceRequest(ethUrl,"currentEthPrice")}, 10100)
    setInterval(() => {this.currentPriceRequest(bchUrl,"currentBchPrice")}, 10100)
  };

  currentPriceRequest(url,coin) {
      // need to use arrow functions with fetch to have 'this' lexically scoped to component
      fetch(url).then((response) => {
          return response.json();
      }).then((myJson) => {
          let price = Number(myJson.price);
          price = parseFloat(price);
          // below line was tricky to figure out for me with the square brackets.
          // I belive it works because the square brackets ge evaluated
          this.setState({
            currentPrices: {
              ...this.state.currentPrices,
              [coin]: price,
            },
          });

          this.setState({
            currentPrices: Object.assign({}, this.state.currentPrices, {
              [coin]: price,
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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <DailyHigh
          btcHigh={this.state.btcHigh}
          ltcHigh={this.state.ltcHigh}
          ethHigh={this.state.ethHigh}
        />
        <CurrentPriceList
          btcPrice={this.state.currentPrices.currentBtcPrice}
          ltcPrice={this.state.currentPrices.currentLtcPrice}
          ethPrice={this.state.currentPrices.currentEthPrice}
          bchPrice={this.state.currentPrices.currentBchPrice}
        />
      </div>
    );
  }
}

export default App;
