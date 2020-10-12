const express = require('express');
const app = express();


const bodyParser = require('body-parser')

const PORT = process.env.PORT || '5000';

app.use(express.static(__dirname + './../../web/dist/'));
app.use(express.static(__dirname + './../../web/static/'));

console.log(`process.env.mode ${process.env.NODE_ENV}`);

app.listen(PORT, () => {
    console.log(`app listening ${PORT}`)
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', require('./route/route.root')({ express }));

