
const express = require('express');
const bodyparser = require('body-parser');


const app = express();


const fs = require('fs');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended :true}));

const routes = require('./routes/routes.js')(app,fs);

const server = app.listen(3001,()=>{
        console.log('listining on port %s...', server.address().port);
})