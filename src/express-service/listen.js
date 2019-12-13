const logger = require('../core/logger')

/**
 * @param {import('express').Application} app 
 */
function listen(app) {
  // @ts-ignore
  return connection => {
    const {port} = connection

    app.listen(port, () => {
      logger.info(`Listening on port ${port} / express service listen`)
    })
  }
}

module.exports = listen