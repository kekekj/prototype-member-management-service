const logger = require('../core/logger')

/**
 * @param {import('mongoose')} mongoose 
 */
function connectionEventHandler(mongoose) {
  const db = mongoose.connection
  
  db.on('error', (err) => {
    logger.error(err)
  });

  db.once('open', () => {
    logger.info('connected ok')
  });
}

module.exports = connectionEventHandler