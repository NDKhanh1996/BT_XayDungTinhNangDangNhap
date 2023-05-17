import {handlers} from "./handlers";

const http = require('http');
const url = require('url');

const router = {
    'home': handlers.home,
    'login': handlers.login,
    'profile': handlers.profile,
}

const server = http.createServer((req, res) => {
    const parseUrl = url.parse(req.url, true)
    const path = parseUrl.pathname;
    const trimPath = path.replace(/^\/+|\/+$/g, '');

    let chosenHandler = (typeof router[trimPath] !== 'undefined') ? router[trimPath] : handlers.notfound;
    chosenHandler(req, res);
});

server.listen(3000, 'localhost', () => {
    console.log('server is running');
});