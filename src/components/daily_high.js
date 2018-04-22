import React from 'react'

const DailyHigh = (props) => {
  return (
    <div>
    <div className="col-sm-3">
    "24hr High:"
    </div>
    <div className="col-sm-3">
    <span>
    <img id="BTC-Logo" src={process.env.PUBLIC_URL + '/img/btc.png'} height="35" alt="Bitcoin"/>
      {props.btcHigh}
    </span>
    </div>
    <div className="col-sm-3">
    <span>
    <img id="LTC-Logo" src={process.env.PUBLIC_URL + '/img/ltc.png'} height="35" alt="Bitcoin"/>
      {props.ltcHigh}
    </span>
    </div>
    <div className="col-sm-3">
    <span>
    <img id="ETH-Logo" src={process.env.PUBLIC_URL + '/img/eth.png'} height="35" alt="Bitcoin"/>
      {props.ethHigh}
    </span>
    </div>
    </div>

  )





}

export default DailyHigh;
