const path = require('path');
const express = require('express');
const app = express();

const publicPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicPath));

app.get('/about', (req, res) => {
    res.send('About page');
});


app.listen(3000, () => {
    console.log('Server is up on port 3000');
});