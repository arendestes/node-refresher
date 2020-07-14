const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/user', (req, res, next) => {
    res.send('<h1>USER: ' + req.body.userName + '</h1>');
});

app.get('/', (req, res, next) => {
    res.send('<form action="/user" method="POST"><input type="text" name="userName"><button type="submit">Add User</button></input></form>')
});

app.listen(5000);