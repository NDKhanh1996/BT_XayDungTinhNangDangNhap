import {write} from "fs";

const fs = require('fs')
export const handlers = {
    home: undefined,
    login: undefined,
    profile: undefined,
    notfound: undefined
};

handlers.home = (req, res) => {
    fs.readFile('./view/home.html', "utf-8", (err, data) => {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });
};

handlers.login = (req, res) => {
    fs.readFile('./view/login.html', "utf-8", (err, data) => {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });
};

handlers.profile = (req, res) => {
    fs.readFile('./view/profile.html', "utf-8", (err, data) => {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });
};

handlers.notfound = (req, res) => {
    fs.readFile('./view/notfound.html', "utf-8", (err, data) => {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });
};
