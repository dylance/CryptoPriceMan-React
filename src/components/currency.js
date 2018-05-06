import React from 'react'

const Currency = (props) => {


  return (
    <div className="container-fluid">
        <div className="row" id="dailyHigh">
            <div className="col-xs-3">
                <span>Select Currency:</span>
            </div>
            <div className="col-xs-3">
                <  img className="currency-logo"
                  src={process.env.PUBLIC_URL + '/img/usd.png'} height="60" alt="USD"
                  onClick={
                     () => props.onUsdClick(props.currency)
                  }

                />
            </div>
            <div className="col-xs-3">
              <img className="currency-logo"
                src={process.env.PUBLIC_URL + '/img/eur.png'} height="60" alt="USD"
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
