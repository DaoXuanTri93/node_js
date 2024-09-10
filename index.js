const express = require('express')
var morgan = require('morgan')


const app = express()
const port = 3000

app.use(morgan('combined'))

app.get('/', (req, res) => {
    let a = 1;
    let b = 2;
    let c = a + b;
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})