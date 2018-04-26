import React from 'react';
import CurrentPriceItem from './current_price_item'

const CurrentPriceList = (props) => {

  const priceRows =  Object.keys(props.currentPriceList).map((keyName, keyIndex) => {
    // use keyName to get current key's name
    // and a[keyName] to get its value
    return (
      <CurrentPriceItem
        price={props.currentPriceList[keyName].price}
        coin={props.currentPriceList[keyName].coin}
      />
    )
  })

  return (
    <div className="container-fluid">
      <div className="row" id="rowprice">
        <div className="Price-container col-sm-12">
          <span id="BTCSpan">
            <img id="BTC-Logo" className="logo" src={process.env.PUBLIC_URL + '/img/btc.png'} height="70" alt="Bitcoin"/>
            <span id="BTC-Price">{Number(props.currentPriceList.currentBtcTicker.price).toFixed(2)}</span>
            <span></span>
          </span>
        </div>
        <div className="Price-container col-sm-12">
          <span>
          <img id="ETH-Logo" className="logo" src={process.env.PUBLIC_URL + '/img/bch.png'} height="70" alt="Bitcoin"/>
          <span id="ETH-Price">{Number(props.currentPriceList.currentBchTicker.price).toFixed(2)}</span>
          </span>
        </div>
        <div className="Price-container col-sm-12">
          <span>
            <img id="LTC-Logo" className="logo" src={process.env.PUBLIC_URL + '/img/ltc.png'} height="70" alt="Bitcoin"/>
            <span id="LTC-Price">{Number(props.currentPriceList.currentLtcTicker.price).toFixed(2)}</span>
          </span>
        </div>
        <div className="Price-container col-sm-12">
          <span>
          <img id="ETH-Logo" className="logo" src={process.env.PUBLIC_URL + '/img/eth.png'} height="70" alt="Bitcoin"/>
          <span id="ETH-Price">{Number(props.currentPriceList.currentEthTicker.price).toFixed(2)}</span>
          </span>
        </div>
        <div>
          {priceRows}
        </div>
      </div>
    </div>
  );
}

export default CurrentPriceList;
