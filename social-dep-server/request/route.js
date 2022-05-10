const requests = [];

let id = 1;

const getRequestHandler = (req, res) => {
    res.json(requests);
};

const postRequestHandler = (req, res) => {
    const newRequest = {
        ...req.body,
        id: id++,
        createdAt: new Date().toISOString()
    };

    requests.push(newRequest);

    res.json(newRequest);
};

const routes = {
    get: [{
        path: '/request',
        handler: getRequestHandler
    }],

    post: [{
        path: '/request',
        handler: postRequestHandler
    }]
}

module.exports = {
    routes
};