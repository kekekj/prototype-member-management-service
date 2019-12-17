const express = require('express')
const listenHTTP = require('./listen-http')
const listenHTTPS = require('./listen-https')
const Routes = require('../route-manager')
const Router = require('../router')
const mountMiddleware = require('./mount-middleware')

const ExpressService = (() => {
  const app = express()
  
  mountMiddleware(app)

  return {
    onRouting() {
      const router = Router(app)

      router.use(Routes.passportLocal)
      router.mountRouterModule('/auth', Routes.passportFacebook)
      router.mountRouterModule('/auth', Routes.passportGoogle)
 
    },
    listenHTTP: listenHTTP(app),
    listenHTTPS: listenHTTPS(app),
  }
})()

module.exports = ExpressService