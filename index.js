const express = require('express');
const app = express();
const phones = require('./phones.json')
const port = 5000;

app.get('/', (req, res) => {
    res.send('Iphone Server is running. Wow')
});

app.get('/phones', (req, res) => {
    res.send(phones)
});

app.get('/phones/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const phone = phones.find(phone => phone.id === id) || {};
    res.send(phone);
});

app.listen(port, () => {
    console.log(`Iphone Server is running on port: ${port}`);
});