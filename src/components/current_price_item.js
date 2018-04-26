import React from 'react';

const CurrentPriceItem = (props) => {

  var priceId = props.coin || ''
  var imgId = props.coin || ''
  var spanId = props.coin || ''
  //var id = props.coin.toUpperCase() + "-Logo"
  if (props.coin){
    priceId = props.coin.toUpperCase() + "-Price"
    imgId = props.coin.toUpperCase() + "-Logo"
    spanId = props.coin.toUpperCase() + "Span"

  }
  return (
    <div className="Price-container col-sm-12">
      <span id={spanId}>
        <img id={imgId} className="logo" src={process.env.PUBLIC_URL + '/img/' + props.coin +'.png'} height="70" alt="Bitcoin"/>
        <span id={priceId}>{Number(props.price).toFixed(2)}</span>
        <span></span>
      </span>
    </div>

  )

}

export default CurrentPriceItem;
