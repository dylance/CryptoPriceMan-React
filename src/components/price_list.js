import React from 'react';

const PriceList = (props) => {
  return (
    <div>
    <div className="col-sm-4">
      {props.coin}
    </div>
    <div className="col-sm-4">
      {props.coin1}
    </div>
    <div className="col-sm-4">
      {props.coin2}
    </div>
    </div>
  );
}

export default PriceList;
