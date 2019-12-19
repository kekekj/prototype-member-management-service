const crypto = require('crypto')
const logger = require('../core/logger')

exports.createHmacHEX = function createHmacHEX(key, data) {
  if (typeof key === 'undefined') {
    logger.error('No expected key to be undefined.')
    return 
  }

  const hmac = crypto.createHmac('sha256', key)

  if (typeof data === 'undefined') {
    return hmac.digest('hex')
  }

  return hmac.update(data)
    .digest('hex')
}

exports.createHmacBASE64 = function createHmacBASE64(key, data) {
  if (typeof key === 'undefined') {
    logger.error('No expected key to be undefined.')
    return 
  }

  const hmac = crypto.createHmac('sha256', key)

  if (typeof data === 'undefined') {
    return hmac.digest('base64')
      .replace(/=+$/, '')
  }

  return hmac.update(data)
    .digest('base64').replace(/=+$/, '')
}