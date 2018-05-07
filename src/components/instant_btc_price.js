import React from 'react'

import classes from './instant_btc_price.css'

const InstantBtcPrice = (props) => {

  return (
    <div>
      <div className="Price-container col-sm-12">
        <span>
          <img id="BTC-Socket-Logo" className="logo" src={process.env.PUBLIC_URL + '/img/btc.png'} height="70" alt="Bitcoin"/>
          <span id="BTC-Price">{Number(props.btcSocketPrice).toFixed(2)}</span>
          <span></span>
        </span>
      </div>
      <div className="Price-container col-sm-12">
        <span height="75">
        </span>
      </div>
    </div>
  )
}

export default InstantBtcPrice
