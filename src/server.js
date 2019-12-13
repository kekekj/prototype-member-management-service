const {execStartMongod} = require('./core/child-process')
const connection = require('./var/connection')
const ExpressService = require('./express-service')
const MongooseService = require('./mongoose-service')
const PassportService = require('./passport-service')
const Router = require('./router')

process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('uncaughtException', (err, origin) => {
  console.log(err)
  console.log(origin)
});

const Server = (() => {
  const state = {definition: {username: String, password: Number}, modelName: 'testUser'}
  const mongooseService = MongooseService(state)
  const passportService = PassportService()

  const expressService = ExpressService({
    router: Router,
    service: {
      mongooseService,
      passportService
    }
  })

  return {
    init() {
      execStartMongod()
    },
    run() {
      mongooseService.connect()
      expressService.bootstrap()
      expressService.onRouting()
      expressService.listen(connection)
    }
  }
})()

Server.init()
Server.run()
