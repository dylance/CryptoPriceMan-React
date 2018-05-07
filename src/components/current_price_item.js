import React from 'react';

import classes from './current_price_item.css'

const CurrentPriceItem = (props) => {

  var priceId = props.coin || ''
  var imgId = props.coin || ''
  var spanId = props.coin || ''
  var time = ''
  var volume = ''
  var ticker = props.coin || ''

  var high = 0;
  var low = 0;

  if(props.coin == "ltc"){
    high = props.ltcHigh
    low = props.ltcLow
  }
  else if (props.coin == "btc"){
    high = props.btcHigh
    low= props.btcLow
  }
  else if (props.coin == "eth"){
    high = props.ethHigh
    low = props.ethLow
  }
  else if (props.coin == "bch"){
    high = props.bchHigh
    low = props.bchLow

  }

  //2018-04-26T23:55:55.221000Z
  //var id = props.coin.toUpperCase() + "-Logo"
  if (props.coin){
    priceId = props.coin.toUpperCase() + "-Price"
    imgId = props.coin.toUpperCase() + "-Logo"
    spanId = props.coin.toUpperCase() + "Span"
    // getting cannot read property of undefined error on below line
    // commented out to prevent site from going down
    //time = props.time.slice(11,19)
    volume = Number(props.volume)
  }
  return (
    <tr>
      <th scope="row" className="table-logos">
        <span>
        <img id={imgId} className="logo" src={process.env.PUBLIC_URL +
        '/img/' + props.coin +'.png'} height="50" alt="Bitcoin"/>
        {ticker.toUpperCase()}
        </span>
      </th>
      <td className="Pricess">
        <span >{props.currency == "usd" ? "$ " : "€ " }
          {Number(props.price).toLocaleString(undefined, {maximumFractionDigits:2})}
        </span>
      </td>
      <td>{volume.toLocaleString(undefined, {maximumFractionDigits:2})}</td>
      <td>{Number(high).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
      <td>{Number(low).toLocaleString(undefined, {maximumFractionDigits:2})}</td>
    </tr>
  )
}

export default CurrentPriceItem;


//
// hangint onto the old boot strap row I was using.
// <div className="Price-container col-sm-12">
//   <span id={spanId}>
//     <img id={imgId} className="logo" src={process.env.PUBLIC_URL + '/img/' + props.coin +'.png'} height="70" alt="Bitcoin"/>
//     <span id={priceId}>{Number(props.price).toLocaleString(undefined, {maximumFractionDigits:2})}  The Time is :  {time}  The Volume is: {volume.toLocaleString(undefined, {maximumFractionDigits:2})}</span>
//     <span></span>
//   </span>
// </div>
