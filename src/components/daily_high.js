import React from 'react'

const DailyHigh = (props) => {
  return (
    <div className="container-fluid">
        <div className="row" id="dailyHigh">
            <div className="col-xs-3">
                <span>24hr High:</span>
            </div>
            <div className="col-xs-3">
                <span id="BTC-High"><img id="BTC-Logo" src={process.env.PUBLIC_URL + '/img/btc.png'} height="35" alt="Bitcoin"/>
                {props.btcHigh}</span>
            </div>
            <div className="col-xs-3">
                <span id="LTC-High"><img id="LTC-Logo" src={process.env.PUBLIC_URL + '/img/ltc.png'} height="35" alt="Bitcoin"/>
                {props.ltcHigh}</span>
            </div>
            <div className="col-xs-3">
                <span id="ETH-High"><img id="ETH-Logo" src={process.env.PUBLIC_URL + '/img/eth.png'} height="35" alt="Bitcoin"/>
                {props.ethHigh}</span>
            </div>
        </div>
    </div>
  )
}

export default DailyHigh;
