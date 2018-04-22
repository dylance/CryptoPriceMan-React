import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PriceList from './components/price_list';

const btcUrl = "https://api.gdax.com/products/BTC-USD/ticker";
const ltcUrl = "https://api.gdax.com/products/LTC-USD/ticker";
const ethUrl = "https://api.gdax.com/products/ETH-USD/ticker";

const btcHighUrl = "https://api.gdax.com/products/btc-usd/stats"
const ltcHighUrl = "https://api.gdax.com/products/ltc-usd/stats"
const ethHighUrl = "https://api.gdax.com/products/eth-usd/stats"

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentBtcPrice: null,
      currentLtcPrice: null,
      currentEthPrice: null,
      btcHigh: null,
      ltcHigh: null,
      ethHigh: null

    }

    this.currentPriceRequest(btcUrl, "currentBtcPrice");
    this.currentPriceRequest(ltcUrl, "currentLtcPrice");
    this.currentPriceRequest(ethUrl, "currentEthPrice");
    this.dailyHighRequest(btcHighUrl, "btcHigh");
    this.dailyHighRequest(btcHighUrl, "ltcHigh");
    this.dailyHighRequest(btcHighUrl, "ethHigh");
    setInterval(() => {this.currentPriceRequest(btcUrl,"currentBtcPrice")}, 10100)
    setInterval(() => {this.currentPriceRequest(ltcUrl,"currentLtcPrice")}, 10100)
    setInterval(() => {this.currentPriceRequest(ethUrl,"currentEthPrice")}, 10100)

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
          this.setState({[coin]: price});
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
        <PriceList
          btcPrice={this.state.currentBtcPrice}
          ltcPrice={this.state.currentLtcPrice}
          ethPrice={this.state.currentEthPrice}


          />

      </div>
    );
  }
}

export default App;
