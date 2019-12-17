const logger = require('../core/logger')

/**
 * @param {import('express').Application} app
 * @returns {(options: import('http').RequestOptions) => void}
 */
function listenHTTP(app) {
  // @ts-ignore
  return (https_options) => {
    const {port, host, protocol, localAddress} = https_options

    app.listen(port, host, () => {
      logger.info(`Listening on protocol: [${protocol}] - host: [${host}] ` +
       `- port: [${port}] - localAddress: [${localAddress}]`)
    })
  }
}

module.exports = listenHTTP