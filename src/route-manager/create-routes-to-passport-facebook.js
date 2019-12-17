const passport = require('passport')
const {facebook, facebook_callback} = require('./var/routePaths')

/**
 * @return {{method: string, path: string, middleware: []}[]}
 */
function createRoutesToPassport() {
 

  const GET = 'get'
  const FACEBOOK = 'facebook'

  return [
    {
      method: GET,
      path: facebook,
      middleware: [
        passport.authenticate(FACEBOOK)
      ]
    },
    {
      method: GET,
      path: facebook_callback,
      middleware: [
        passport.authenticate(
          FACEBOOK,
          { successRedirect: '/',
            failureRedirect: '/login' 
          }
        ),
        (req, res) => {
          res.redirect('/')
        }
      ]
    }
  ]
}

module.exports = createRoutesToPassport