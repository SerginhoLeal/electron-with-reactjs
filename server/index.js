require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

const app = express();

app.use(express.static('public'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use(cors());

mongoose.connect(
  process.env.MONGO_URL,
  // 'mongodb://localhost:27017/anime',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

requireDir('./src/upload/models');

app.use('/', require('./src/routes'));

app.listen(process.env.PORT || 5000);