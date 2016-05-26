import express from 'express';
import bodyParser from 'body-parser';

// connect to our localhost database
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost');

const app = express();

app.use('/', express.static('public'));
app.use(bodyParser.json());

require('./routes')(app);

app.listen(process.env.PORT || 3000, () => {
  console.log('listening on *:3000');
});