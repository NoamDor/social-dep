const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const jsonParser = bodyParser.json()

const requests = [{
    id: 0,
    creatorName: 'creator',
    clientName: 'client',
    clientId: '123456789',
    phoneNum: '0547776666',
    address: '123 main street',
    desc: 'description',
    decisions: 'decisions',
    status: 'new',
    category: 'elderly'
}];

let id = 1;

app.get('/request', function(req, res) {
    res.json(requests);
});

app.post('/request', jsonParser, function(req, res) {

    const newRequest = {
        ...req.body,
        id: id++
    };

    requests.push(newRequest);

    res.json(newRequest);
});

app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`)
});