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
        time={props.currentPriceList[keyName].time}
        volume={props.currentPriceList[keyName].volume}
        btcHigh={props.btcHigh}
        ltcHigh={props.ltcHigh}
        ethHigh={props.ethHigh}
      />
    )
  })

  return (
    <div>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Coin</th>
      <th scope="col">Price</th>
      <th scope="col">Volume</th>
      <th scope="col">24Hr High</th>
    </tr>
  </thead>
    <tbody>
    {priceRows}
    </tbody>
  </table>
    <div className="container-fluid">
      <div className="row" id="rowprice">

      </div>

    </div>
  </div>
  );
}

export default CurrentPriceList;
