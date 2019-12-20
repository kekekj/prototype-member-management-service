const passport = require('passport')
const P_ = require('./var/ROUTE_PATH')

const routesPassportGoogle = (() => {
  const GET = 'get'

  const routeGoogle = [{
    method: GET,
    path: P_.GOOGLE,
    middleware: [
      passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] })
    ] 
  }]

  const routeGoogleCallback = [{
    method: GET,
    path: P_.GOOGLE_CALLBACK,
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