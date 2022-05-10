const express = require('express');
const app = express();
const port = 3000;

app.get('/request', function(req, res) {
    res.json([{
        id: 1,
        creatorName: 'creator',
        clientName: 'client',
        clientId: '123456789',
        phoneNum: '0547776666',
        address: '123 main street',
        desc: 'description',
        decisions: 'decisions',
        status: 'new',
        category: 'elderly'
    }]);
});

app.post('/request', function(req, res) {
    res.json([{
        id: 2,
        creatorName: 'creator',
        clientName: 'client',
        clientId: '123456789',
        phoneNum: '0547776666',
        address: '123 main street',
        desc: 'description',
        decisions: 'decisions',
        status: 'new',
        category: 'elderly'
    }]);
});

app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`)
});