const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

let app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.join('index.html'));
});

app.post('/index', (req, res) => {
    console.log('Post request');
    res.send('Post request');
});


app.listen(3333, () => console.log('Server is running ...'));
