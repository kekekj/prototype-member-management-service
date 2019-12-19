const mongoose = require('mongoose')
const {modelName, uri} = require('./var/mongoose-config')
const logger = require('../core/logger')

function connectionEventHandler() {
  const db = mongoose.connection
  
  db.on('error', (err) => {
    logger.error(err)
  });

  db.once('open', () => {
    logger.info(`Event 'open' : Connection to [${uri}], model: [${modelName}].`)
  });
}

module.exports = connectionEventHandler