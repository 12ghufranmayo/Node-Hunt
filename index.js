const express = require('express');
require('dotenv').config()

const app = express();
process.env.PORT = 3000;

app.get('/', (request, response) => {
    response.send('This is express site');
});

app.get('/twitter', (request, res) => {
    res.send('<h1>This is Twitter page<h1/>');
});

app.get('/twitter', (request, res) => {
    res.send('<h1>This is Twitter page<h1/>');
});

app.listen(PORT, () => {
    console.warn(`Server is running at http://localhost:${PORT}`);
});