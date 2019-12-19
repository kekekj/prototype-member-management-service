const passport = require('passport')
const P_ = require('./var/routePaths')
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

  const route_login_GET = [{
    method: GET,
    path: P_.LOGIN,
    middleware: [
      loginGET.clearCookie,
      loginGET.respondHTMl
    ]
  }]

  const route_login_POST = [{
    method: POST,
    path: P_.LOGIN,
    middleware: [
      passport.authenticate(
        LOCAL, 
        optsToPassport,
        // verifyPassportSerial(passport, optsToPassport)
      ),
    ]
  }]

  const route_login_check_logged_AJAX = [{
    method: GET,
    path: P_.LOGIN_AJAX_CHECK_LOGGED,
    middleware: [
      loginAjaxCheckLogged.respondJSON
    ]
  }]

  const route_signup_GET = [{
    method: GET,
    path: P_.SIGNUP,
    middleware: [
      signupGET.readIndexPage
    ]
  }]

  const route_signup_POST = [{
    method: POST,
    path: P_.SIGNUP,
    middleware: [
      signupPOST.validateInputs,
      signupPOST.setSignedCookie,
      signupPOST.setUnsignedCookie,
      signupPOST.respondPage,
    ]
  }]

  const route_signup_failed_AJAX = [{
    method: GET,
    path: P_.SIGNUP_AJAX_LOGIN,
    middleware: [
      signupGETAjaxLogin.respondJSON
    ]
  }]

  const route_signup_facebook = [{
    method: GET,
    path: P_.SIGNUP_FACEBOOK,
    middleware: [

    ]
  }]

  return [
    ...route_login_GET,
    ...route_login_POST,
    ...route_login_check_logged_AJAX,
    ...route_signup_GET,
    ...route_signup_POST,
    ...route_signup_failed_AJAX,
    ...route_signup_facebook
  ]
})()

module.exports = routesPassportLocal