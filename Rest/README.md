
# Get Started

For a basic product overview, check out our [setup and use documentation](https://github.com/Abyiss/Client-python/blob/production/README.md) or go to our website [Abyiss.com](https://abyiss.com/documentation)

# Simple REST API Demo

```javascript
const request = require('request');

request('http://169.63.179.247/v1/exchanges', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
```

