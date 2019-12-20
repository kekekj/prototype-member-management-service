const express = require('express')
const logger = require('../core/logger')

/**
 * @param {import('express').Application} app 
 */
function Router(app) {
  if (typeof app === 'undefined') {
    throw new Error('No expected store to be undefined.')
  }
  
  return {
    use(routes) {
      routes.forEach(function mountRoutes(route) {
        const {method, path, middleware} = route
        
        if (method === 'get') {
          app.get(path, middleware)
          return
        }

        if (method === 'post') {
          app.post(path, middleware)
          return
        }
      });
    },
    mountRouterModule(root, routes) {
      const routerToMount = express.Router()
      
      try {
        routes.forEach(function mountRoutesIntoRouterModule(route) {
          const {method, path, middleware} = route
  
          if (method === 'get') {
            routerToMount.get(path, middleware)
            return
          }
  
          if (method === 'post') {
            routerToMount.post(path, middleware)
            return
          }
        })
      } catch (e) {
        logger.error(e)
        return
      }

      app.use(root, routerToMount)
    }
  }
}

module.exports = Router