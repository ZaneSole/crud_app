const express = require('express')
const cors = require('cors');
const path = require('path');
const app = express()
const port = 3000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "./dist")));
app.use('/api', require('./route/route.js'));