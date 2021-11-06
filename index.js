require("dotenv").config();

const http = require("http");

const ENV_VARS = {
    dbHost: process.env.DB_HOST,
    dbUser: process.env.DB_USER,
    dbPass: process.env.DB_PASS,
    email: process.env.DB_EMAIL,
};

http
    .createServer((req, res) => {
        res.writeHead(200, { "Conten-Type": "application/json" });
        res.write(JSON.stringify(ENV_VARS));
        res.end();
    })
    .listen(process.env.PORT);