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
    new winston.transports.File({ filename: 'log_files/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'log_files/combined.log', level: 'info'})
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

function loggerWrapper() {
  logger.info('------Log Start------')
  return logger
}

module.exports = loggerWrapper()