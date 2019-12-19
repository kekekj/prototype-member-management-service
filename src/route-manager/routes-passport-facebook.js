const passport = require('passport')
const {facebook, facebook_callback} = require('./var/routePaths')

const routesPassportFacebook = (() => {
  const GET = 'get'
  const FACEBOOK = 'facebook'

  const routeFacebookGET = [{
    method: GET,
    path: facebook,
    middleware: [
      passport.authenticate(FACEBOOK)
    ]
  }]

  const routeFacebookCallbackGET = [{
    method: GET,
    path: facebook_callback,
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