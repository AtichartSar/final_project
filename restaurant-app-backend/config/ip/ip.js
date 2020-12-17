const ip = require('ip');
const port = process.env.port
const getIp = () => {
    return  "http://localhost:" + port + "/"
}

module.exports = { getIp }