const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cloudinary = require('cloudinary');

const app = express();

const keys = require('./config/keys');
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);
cloudinary.config({
  cloud_name: keys.cloud_name,
  api_key: keys.cloud_key,
  api_secret: keys.cloud_secret
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
  if (err)
  console.log(err);
console.log(`App listening on ${PORT}`);
});
