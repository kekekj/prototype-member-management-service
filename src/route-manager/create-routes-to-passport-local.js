const {root, login} = require('./var/routePaths')

/**
 * @param {import('passport').PassportStatic} passport 
 */
function createRoutesToBase(passport) {
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