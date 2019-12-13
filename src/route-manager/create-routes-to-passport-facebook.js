const {facebook, facebook_callback} = require('./var/routePaths')
/**
 * @param {import("passport").PassportStatic} passport 
 * @return {{method: string, path: string, middleware: []}[]}
 */
function createRoutesToPassport(passport) {
  if (typeof passport === 'undefined') {
    throw new Error('No expected passport to be undefined.')
  }

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
          { failureRedirect: '/login' }
        ),
        (req, res) => {
          res.redirect('/')
        }
      ]
    }
  ]
}

module.exports = createRoutesToPassport