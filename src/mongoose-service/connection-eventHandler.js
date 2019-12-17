const mongoose = require('mongoose')
const logger = require('../core/logger')

function connectionEventHandler() {
  const db = mongoose.connection
  
  db.on('error', (err) => {
    logger.error(err)
  });

  db.once('open', () => {
    logger.info('connected ok')
  });
}

module.exports = connectionEventHandler