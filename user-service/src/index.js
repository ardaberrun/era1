const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Router = require('./routes/index');

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://user-db:27017/userdb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('DB -> OK');
  }).catch(err => {
    console.log(`DB -> ERROR: ${ err }`);
  });

Router.initialize(app);

app.listen(PORT, () => {
  console.log(`user service is working on ${ PORT }`);
});
