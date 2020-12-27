require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dns = require('dns');

let Schema = mongoose.Schema;

// url Schema
const urlSchema = new Schema({
  originalUrl: {
    type: String,
    required: true
  },
  shortUrl: {
    type: String,
    required: true
  }
});

// url Model
let urlModel = mongoose.model('urlModel',urlSchema);

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
} ,() => console.log('MongoDB connection success!!'));

// Basic Configuration
const port = process.env.PORT || 3000;
let number = 1;

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});


app.post('/api/shorturl/new', (req, res) => {

  let url = new urlModel({
    originalUrl: req.body.url,
    shortUrl: 'd' + (number) + 'es'
  });
  url.save((err, data) => {
    if (err) {
      res.json({
        error: err
      });
    } else {
      number++;
      res.json({
        original_url: data.originalUrl,
        short_url: data.shortUrl
      });
    }
  });
});

app.get('/api/shorturl/:shorturl', (req, res) => {
  let short = req.params.shorturl;
  urlModel.findOne({
    shortUrl: short
  }, (err, data) => {
    if (err) {
      res.json({
        error: err
      });
    } else {
      res.redirect(data.originalUrl);
    }
  });
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
