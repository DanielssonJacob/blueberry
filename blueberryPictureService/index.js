var express = require('express');
var app = express();

const cors = require('cors')

app.use(cors())
app.use(express.static('public'));
app.listen(3001, console.log("listening on port 3001"))