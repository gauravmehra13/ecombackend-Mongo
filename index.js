const express = require('express')
const cors = require('cors')

const all = require('./pages/all');
const galaxybook = require('./pages/galaxybook')
const smartphones = require('./pages/smart')
const tabs = require('./pages/tab')
const accessories = require('./pages/accessories')
const tv = require('./pages/tv')
const watches = require('./pages/watches')

const app = express();

app.use(cors());

app.use("/", all);
app.use("/", smartphones);
app.use("/", galaxybook);
app.use("/", tabs);
app.use("/", tv);
app.use("/", watches);
app.use("/", accessories);

app.listen(5910,() =>{
    console.log("App is Running at port 5910");
})