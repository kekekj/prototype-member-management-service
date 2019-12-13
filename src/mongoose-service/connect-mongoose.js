const mongooseConfig = require('./var/mongoose-config')
const logger = require('../core/logger')

/**
 * @param {import('mongoose')} mongoose
 */
function connectMongoose(mongoose) {
  const {uri, connectionOptions} = mongooseConfig

  return mongoose.connect(uri, connectionOptions).then(() => {
    logger.info('mongodb connected')
  }).catch(err => {
    logger.error(err)
  })
}

module.exports = connectMongoose