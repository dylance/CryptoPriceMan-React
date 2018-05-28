import React from 'react'

import classes from './currency.css';

const Currency = (props) => {


  return (
    <div className="container-fluid">
        <div className="row" id="dailyHigh">
            <div className="col-xs-3">
                <span>Select Currency:</span>
            </div>
            <div className="col-xs-3">
                <  img className="currency-logo"
                  src={process.env.PUBLIC_URL + '/img/USD.png'} height="60" alt="USD"
                  onClick={
                     () => props.onUsdClick(props.currency)
                  }

                />
            </div>
            <div className="col-xs-3">
              <img className="currency-logo"
                src={process.env.PUBLIC_URL + '/img/EUR.png'} height="60" alt="USD"
                onClick={
                   () => props.onEurClick(props.currency)
                }

              />
            </div>
            <div className="col-xs-3">

            </div>
        </div>
    </div>
  )


}

export default Currency;
