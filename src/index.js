
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');

const route = require('./routes')
const db = require('./config/db')

//connect db
db.connect();


const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
  extended: true
}))



app.use(express.json())
// logger
// app.use(morgan('combined'))

// Template engine
app.engine('hbs', handlebars.engine(
  {
    defaultLayout: 'main',
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b
    }
  }))

app.set('view engine', 'hbs');
// app set
app.set('views', path.join(__dirname, 'resources/views'));

// route
route(app)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})