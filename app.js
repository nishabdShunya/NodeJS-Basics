const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('Inside a Middleware.');
    next();
});

app.use((req, res, next) => {
    console.log('Inside Another Middleware.');
    res.send('<h1>Welcome Home</h1>');
});

app.listen(3000);