const fs = require('fs')
const path = require('path')
const morgan = require('morgan')

const morganWrapper = (() => {
  const accessLogStream = fs.createWriteStream(path.join('log_files', 'request.log'), { flags: 'a' })

  const format = ':method :url :status :res[content-length] - :response-time ms'
  const outOpts = { stream: accessLogStream }

  return {
    log: () => morgan(format),
    logFile: () => morgan(format, outOpts),
  }
})()

module.exports = morganWrapper