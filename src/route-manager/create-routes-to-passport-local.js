const passport = require('passport')
const {root, login, signup} = require('./var/routePaths')
const signupView = require('../routing-middleware/signup/signup-view')
const signupPost = require('../routing-middleware/signup/signup-post')
/**

 */
function createRoutesToBase() {
  const GET = 'get'
  const POST = 'post'
  const LOCAL = 'local'

  const optsToPassport = { 
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true,
  }

  return [
    {
      method: GET,
      path: root,
      middleware: [
        (req, res) => {
          res.redirect(root)
        }
      ]
    },
    {
      method: GET,
      path: login,
      middleware: [
        (req, res) => {
          res.end(`login page for request ${req.url}`)
        }
      ]
    },
    {
      method: GET,
      path: signup,
      middleware: [
        async (req, res) => {
          const body = await signupView()
          res.end(body)
        }
      ]
    },
    {
      method: POST,
      path: signup,
      middleware: [
        signupPost
      ]
    },
    {
      method: POST,
      path: login,
      middleware: [
        passport.authenticate(
          LOCAL, 
          optsToPassport,
          // verifyPassportSerial(passport, optsToPassport)
        ),
      ]
    }
  ]
}

module.exports = createRoutesToBase