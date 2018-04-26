import React from 'react'

const InstantBtcPrice = (props) => {

  return (
    <div>
      <div className="Price-container col-sm-12">
        <span id="BTCSpan">
          <img id="BTC-Logo" className="logo" src={process.env.PUBLIC_URL + '/img/btc.png'} height="70" alt="Bitcoin"/>
          <span id="BTC-Price">{Number(props.btcSocketPrice).toFixed(2)}</span>
          <span></span>
        </span>
      </div>
    </div>
  )
}

export default InstantBtcPrice
