import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PriceList from './components/price-list';

const btcUrl = "https://api.gdax.com/products/BTC-USD/ticker";
const ltcUrl = "https://api.gdax.com/products/LTC-USD/ticker";
const ethUrl = "https://api.gdax.com/products/ETH-USD/ticker";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      currentBtcPrice: 8000,
      currentLtcPrice: null,
      currentEthPrice: null
    }
    console.log(Object.keys(this.state))
    this.firstRequest(btcUrl, "currentBtcPrice");
    this.firstRequest(ltcUrl, "currentLtcPrice");
    setInterval(() => {this.firstRequest(btcUrl)}, 10100)

  };

  firstRequest(url,coin) {
      fetch(url).then((response) => {
          return response.json();
      }).then((myJson) => {
          let price = Number(myJson.price);
          price = parseFloat(price);
          this.setState({[coin]: price});
          console.log(price);

      }).catch(function(err) {
          console.log("the Gdax API call did not go through!! try again")
      })
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
        <PriceList />
        {this.state.currentBtcPrice}
        {this.state.currentLtcPrice}
      </div>
    );
  }
}

export default App;
