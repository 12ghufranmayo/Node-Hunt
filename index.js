const express = require('express');
require('dotenv').config()

const app = express();
PORT = process.env.PORT

app.get('/', (request, response) => {
    response.send('Hi There! This is express site');
});

app.get('/twitter', (request, res) => {
    res.send('<h1>This is Twitter page<h1/>');
});

app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params)
})

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Why don't scientists trust atoms?",
            description: "Because they make up everything!"
        },
        {
            id: 2,
            title: "Parallel lines",
            description: "Parallel lines have so much in common. It’s a shame they’ll never meet."
        },
        {
            id: 3,
            title: "Why did the scarecrow win an award?",
            description: "Because he was outstanding in his field!"
        },
        {
            id: 4,
            title: "I told my computer I needed a break.",
            description: "Now it won’t stop sending me KitKat ads."
        },
        {
            id: 5,
            title: "Why don’t skeletons fight each other?",
            description: "They don’t have the guts."
        }
    ];

    res.send(jokes);
    
});

app.listen(PORT, () => {
    console.warn(`Server is running at http://localhost:${PORT}`);
});