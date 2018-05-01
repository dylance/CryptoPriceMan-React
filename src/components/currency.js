import React from 'react'

const Currency = (props) => {


  return (
    <div className="container-fluid">
        <div className="row" id="dailyHigh">
            <div className="col-xs-3">
                <span>Select Currency:</span>
            </div>
            <div className="col-xs-3">
                <img
                  src={process.env.PUBLIC_URL + '/img/usd.png'} height="90" alt="USD"
                  onClick={ () => {
                    console.log("THE USD img has been clicked")
                  }}
                />
            </div>
            <div className="col-xs-3">
              <img
                src={process.env.PUBLIC_URL + '/img/eur.png'} height="90" alt="USD"
                onClick={ () => {
                  console.log("THE EUR img has been clicked")
                }}
              />
            </div>
            <div className="col-xs-3">

            </div>
        </div>
    </div>
  )


}

export default Currency;
