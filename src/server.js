const {execStartMongod} = require('./core/child-process')
const {httpS_options} = require('./var-global/connection')
const ExpressService = require('./express-service')
const MongooseService = require('./mongoose-service')
const PassportService = require('./passport-service')
const logger = require('./core/logger')

process.on('unhandledRejection', (reason, promise) => {
  logger.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('uncaughtException', (err) => {
  logger.error(err.stack)
});

const Server = (() => {
  const Model = MongooseService.getModel()

  return {
    runDB() {
      execStartMongod()
      MongooseService.connectDB()
    },
    initServices() {
      PassportService.initSerialization(Model)
      PassportService.useLocal(Model)
      PassportService.useFacebook(Model)
      PassportService.useGoogle(Model)
      ExpressService.onRouting()
    },
    run() {
      ExpressService.listenHTTPS(httpS_options)
    }
  }
})()

Server.runDB()
Server.initServices()
Server.run()
