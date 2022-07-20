const express = require('express');
const app = express();
const PORT = process.env.port || 3000;

app.get('/', (req, res) => {
    res.send('Home');
})

app.get('/about', (req, res) => {
    res.send('About');
})

app.get('/blog', (req, res) => {
    res.send('Blog');
})

app.get('*', (req, res) => {
    res.send('404 Page Not Found');
})

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
})