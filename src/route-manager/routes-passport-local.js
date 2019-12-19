const passport = require('passport')
const {login, signup, signup_ajax_login, login_ajax_check_logged} = require('./var/routePaths')
const loginGET = require('./middleware/login-get')
const loginAjaxCheckLogged = require('./middleware/login-ajax-check-logged')
const signupPOST = require('./middleware/signup-post')
const signupGET = require('./middleware/signup-get')
const signupGETAjaxLogin =  require('./middleware/signup-ajax-get')


const routesPassportLocal = (() => {
  const GET = 'get'
  const POST = 'post'
  const LOCAL = 'local'

  const optsToPassport = { 
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true,
  }

  const routeLoginGET = [{
    method: GET,
    path: login,
    middleware: [
      loginGET.clearCookie,
      loginGET.respondHTMl
    ]
  }]

  const routeLoginPOST = [{
    method: POST,
    path: login,
    middleware: [
      passport.authenticate(
        LOCAL, 
        optsToPassport,
        // verifyPassportSerial(passport, optsToPassport)
      ),
    ]
  }]

  const routeLoginAjaxCheckLogged = [{
    method: GET,
    path: login_ajax_check_logged,
    middleware: [
      loginAjaxCheckLogged.respondJSON
    ]
  }]

  const routeSignupGET = [{
    method: GET,
    path: signup,
    middleware: [
      signupGET.readIndexPage
    ]
  }]

  const routeSignupPOST = [{
    method: POST,
    path: signup,
    middleware: [
      signupPOST.validateInputs,
      signupPOST.setSignedCookie,
      signupPOST.setUnsignedCookie,
      signupPOST.respondPage,
    ]
  }]

  const routeSignupAjaxFailed = [{
    method: GET,
    path: signup_ajax_login,
    middleware: [
      signupGETAjaxLogin.respondJSON
    ]
  }]

  return [
    ...routeLoginGET,
    ...routeLoginPOST,
    ...routeLoginAjaxCheckLogged,
    ...routeSignupGET,
    ...routeSignupPOST,
    ...routeSignupAjaxFailed
  ]
})()

module.exports = routesPassportLocal