const express = require('express')
const listen = require('./listen')
const RouteManager = require('../route-manager')
const mountMiddleware = require('./mount-middleware')

function ExpressService(state) {
  const app = express()
  let store = {}

  const {service, Router} = state
  const {passportService, mongooseService} = service

  const passport = passportService.getPassport()
  const model = mongooseService.model

  store = Object.assign(store, 
    {
      app,
      passport,
      model
    }
  )

  const routeManager = RouteManager(store)
  const {routesToPassportLocal, routesToPassportFacebook} = routeManager

  return {
    bootstrap() {
      mountMiddleware(store)
      passportService.initSerialization(model)
      passportService.useLocalStrategy(model)
      passportService.userFacebookStrategy(model)
    },
    onRouting() {
      const router = Router(app)
      router.use(routesToPassportLocal)
      router.mountRouterModule('/auth', routesToPassportFacebook)
    },
    listen: listen(app),
  }
}

module.exports = ExpressService