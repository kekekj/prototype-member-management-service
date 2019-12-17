const winston = require('winston');
const {format, } = winston
const {combine, label, timestamp, printf} = format

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});



// const willNeverThrow = format.combine(
//   format(info => { return false })(), // Ignores everything
//   format(info => { throw new Error('Never reached') })()
// );



// Below all code from https://github.com/winstonjs/winston
const logger = winston.createLogger({
  level: 'info',
  format: combine(
    label({label: 'prototype-dev'}),
    timestamp({format:'YY-MM-DD hh:mm:ss'}),
    myFormat
  ),
  defaultMeta: { service: 'backend-service' },
  transports: [
    // new winston.transports.File({ filename: 'log_files/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'log_files/combined.log', level: 'info'})
  ]
});

const errLogger =  winston.createLogger({
  level: 'error',
  format: combine(
    label({label: 'prototype-dev'}),
    timestamp({format:'YY-MM-DD hh:mm:ss'}),
    myFormat
  ),
  defaultMeta: { service: 'backend-service' },
  transports: [
    new winston.transports.File({ filename: 'log_files/error.log', level: 'error' }),
  ]
});

const debugLogger = winston.createLogger({
  level: 'debug',
  format: combine(
    label({label: 'prototype-dev'}),
    timestamp({format:'YY-MM-DD hh:mm:ss'}),
    myFormat
  ),
  defaultMeta: { service: 'backend-service' },
  transports: [
    new winston.transports.File({ filename: 'log_files/debug.log', level: 'debug' }),
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

function getStack(msg) {
  return msg.stack ? msg.stack : msg
}

function loggerWrapper() {
  return {
    info(msg) {
      const stack = getStack(msg)
      logger.info('------------Log Start------------')
      logger.info(stack)
      console.log(stack)
    },
    debug(msg) {
      const stack = getStack(msg)
      debugLogger.info('------------Debug Log Start------------')
      debugLogger.info(stack)
      console.log(stack)
    },
    error(msg) {
      const stack = getStack(msg)
      
      errLogger.error('------------Error Log Start------------')
      errLogger.error(stack)
      console.log(stack)
    }
  }
}

module.exports = loggerWrapper()