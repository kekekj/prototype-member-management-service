const MongoClient = require('mongodb').MongoClient;
const {url} = require('./var/mongo-config')
const logger = require('../core/logger')

/**
 * @description Connects to mongod server by mongo client.
 * @returns {Promise<any>}
 */
function checkStatus() {
  /**@type {null} */
  let ERROR_MONGOD_STATUS_INACTIVE = null

  return MongoClient.connect(url)
    .then((client) => {
      logger.info(`For to check mongod status, Mongo client connected on ${url}`)
      logger.info('Mongod status is active.')
      logger.info('Mongo client will be closed because checking for mongod status is end.')
      client.close()
    })
    .catch(err => {
      ERROR_MONGOD_STATUS_INACTIVE = err
      logger.error(err)
      logger.error('Warning: mongod status is inactive.')
      logger.error(`Run command : $ sudo service mongod start`)
    })
    .finally(() => {
      if (ERROR_MONGOD_STATUS_INACTIVE !== null) {
        logger.info('Mongo client will connect to mongodb again after 5 seconds.')
        return setTimeout(() => {
          checkStatus()
        }, 5 * 1000)
      }
      return
    })
}

module.exports = checkStatus