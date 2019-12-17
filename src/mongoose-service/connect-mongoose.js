const mongoose = require('mongoose')
const mongooseConfig = require('./var/mongoose-config')
const logger = require('../core/logger')

function connectMongoose() {
  const {uri, connectionOptions} = mongooseConfig

  return mongoose.connect(uri, connectionOptions).then(() => {
    logger.info('mongodb connected')
  }).catch(err => {
    logger.error(err)
  })
}

module.exports = connectMongoose