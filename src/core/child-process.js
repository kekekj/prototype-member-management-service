const { exec } = require('child_process');
const logger = require('./logger')

function execWrapper(cmd) {
  exec(cmd, (err, stdout, stderr) => {
    if (err) {
      throw err
    }
    if (stdout) {
      logger.info(`${stdout}/child-process`)
    }
    if (stderr) {
      logger.error(`${stderr}/child-process`)
    }
  })
}

const childProcess = (() => {
  const mongod_start = 'service mongod start'

  return {
    execStartMongod() {
      execWrapper(mongod_start)
    }
  }
})()

module.exports = childProcess