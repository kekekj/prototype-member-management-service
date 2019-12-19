const mongoose = require('mongoose')
const mongooseConfig = require('./var/mongoose-config')
const logger = require('../core/logger')

function connectMongoose() {
  const {uri, connectionOptions, modelName} = mongooseConfig

  return mongoose.connect(uri, connectionOptions).then(() => {
    logger.info(`Client connected on ${uri}, model: ${modelName}`)
  }).catch(err => {
    logger.error(err)
  })
}

module.exports = connectMongoose