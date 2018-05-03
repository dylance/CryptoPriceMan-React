# Crypto Price Man in React

## About

I'm rebuilding cryptopriceman.com in react and adding new features once I bring the site up to where it currently is.

The app pulls the latest cryptocurrency prices from the GDAX exchange and updates them automatically every 10 seconds. The data is received from GDAX's public API endpoints. Base Currencies can be switched from USD to EUR. A web socket is also used to display the latest BTC-USD bids on the bottom of the page.


Website can be viewed at: http://www.cryptopriceman.com
UPDATED: 5/1/18


## Requirements

Node.js  v6.0.0 and higher

## Installation

`npm install

npm run build

node server.js`

Open site in browser at http://localhost:3000/


#### TO DO

Immediate:
- Improve styling with bootstrap table, especially in mobile. try to enable scrollable table window
- delay API calls so no longer getting 429 responses due rate limiting
- Create API endpoints on my express server
- Add BTC as a base currency
- Include more data such as 24hr low and percent changes in price
- Resize currencies on hover and add border


Long term:
- figure out way to cache previous daily highs so don't have to wait to for requests to get back and wait on render
- Only use web socket for data
- Create authentication systems
- Use Authentication System so users can customize page view.
- Add cookies to site so client can view prices from previous visit to site
- Add different exchanges
- Get logo for site
- Use redux
- Possible Redesign of data structures

Fixed:

- BUG!!! - unable to  `npm i` on ubunto server due to gdax package
this leaves websocket disable from being run on website. urgent issue
- add 24 hour high for BCH
- fix lining up of logos
- rename classes
- add Data to current_price_item


## Creator

Dylan Ellison
