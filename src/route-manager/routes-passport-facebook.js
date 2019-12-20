const passport = require('passport')
const P_ = require('./var/ROUTE_PATH')

const routesPassportFacebook = (() => {
  const GET = 'get'
  const FACEBOOK = 'facebook'

  const routeFacebookGET = [{
    method: GET,
    path: P_.FACEBOOK,
    middleware: [
      passport.authenticate(FACEBOOK)
    ]
  }]

  const routeFacebookCallbackGET = [{
    method: GET,
    path: P_.FACEBOOK_CALLBACK,
    middleware: [
      passport.authenticate(
        FACEBOOK,
        // { 
        //   successRedirect: '/',
        //   failureRedirect: '/login' 
        // }
      ),
      function bridge (req, res) {
        res.redirect('/')
      }
    ]
  }]

  return [
    ...routeFacebookGET,
    ...routeFacebookCallbackGET
  ]
})()

module.exports = routesPassportFacebook