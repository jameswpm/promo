const express = require('express')
const app = express()

require('./routes')(app);

app.listen(3000, function () {
  console.log('PromoDeBolso server JS is running on port 3000!')
})
