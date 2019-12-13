const express = require('express')

/**
 * @param {import('express').Application} app 
 */
function Router(app) {
  if (typeof app === 'undefined') {
    throw new Error('No expected store to be undefined.')
  }
  

  return {
    use(routes) {
      routes.forEach(route => {
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

      routes.forEach(route => {
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

      app.use(root, routerToMount)
    }
  }
}

module.exports = Router