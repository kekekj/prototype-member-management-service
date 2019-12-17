const logger = require('../core/logger')
const fs = require('fs')
const https = require('https')

/**
 * @param {import('express').Application} app
 * @returns {(options: import('http').RequestOptions) => void}
 */
function listenHTTPS(app) {
  // @ts-ignore
  return (https_options) => {
   
    const options = {
      key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
      cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem')
    };

    const {port, host, protocol, localAddress} = https_options

    https.createServer(options, app).listen(port, host, () => {
      logger.info(`Listening on protocol: [${protocol}] - host: [${host}] ` +
       `- port: [${port}] - localAddress: [${localAddress}]`)
    })
  }
}

module.exports = listenHTTPS