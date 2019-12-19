const passport = require('passport')
const {google, google_callback} = require('./var/routePaths')

const routesPassportGoogle = (() => {
  const GET = 'get'

  const routeGoogle = [{
    method: GET,
    path: google,
    middleware: [
      passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] })
    ] 
  }]

  const routeGoogleCallback = [{
    method: GET,
    path: google_callback,
    middleware: [
      passport.authenticate('google', { failureRedirect: '/login' }),
    ]
  }]

  return [
    ...routeGoogle,
    ...routeGoogleCallback
  ]
})()


module.exports = routesPassportGoogle