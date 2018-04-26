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
        {priceRows}
      </div>
    </div>
  );
}

export default CurrentPriceList;
