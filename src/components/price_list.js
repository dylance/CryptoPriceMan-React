import React from 'react';

const PriceList = (props) => {
  return (
    <div>
    <div className="col-sm-4">
    <img src={process.env.PUBLIC_URL + '/img/btc.png'} height="35" alt="Bitcoin"/>
      {props.btcPrice}
    </div>
    <div className="col-sm-4">
    <img src={process.env.PUBLIC_URL + '/img/ltc.png'} height="35" alt="Bitcoin"/>
      {props.ltcPrice}
    </div>
    <div className="col-sm-4">
    <img src={process.env.PUBLIC_URL + '/img/eth.png'} height="35" alt="Bitcoin"/>
      {props.ethPrice}
    </div>
    </div>
  );
}

export default PriceList;
