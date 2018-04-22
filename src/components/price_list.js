import React from 'react';

const PriceList = (props) => {
  return (
    <div>
    <div className="Price-container col-sm-4">
    <span>
    <img id="BTC-Logo" src={process.env.PUBLIC_URL + '/img/btc.png'} height="35" alt="Bitcoin"/>
      {props.btcPrice}
    </span>
    </div>
    <div className="Price-container col-sm-4">
    <span>
    <img id="LTC-Logo" src={process.env.PUBLIC_URL + '/img/ltc.png'} height="35" alt="Bitcoin"/>
      {props.ltcPrice}
    </span>
    </div>
    <div className="Price-container col-sm-4">
    <span>
    <img id="ETH-Logo" src={process.env.PUBLIC_URL + '/img/eth.png'} height="35" alt="Bitcoin"/>
      {props.ethPrice}
    </span>
    </div>
    </div>
  );
}

export default PriceList;
