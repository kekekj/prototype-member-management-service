const passport = require('passport')
const {google, google_callback} = require('./var/routePaths')

/**
 * @return {{method: string, path: string, middleware: []}[]}
 */
function createRoutesToPassportGoggle() {
  const GET = 'get'

  return [
    {
      method: GET,
      path: google,
      middleware: [
        passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] })
      ] 
    },
    {
      method: GET,
      path: google_callback,
      middleware: [
        passport.authenticate('google', { failureRedirect: '/login' }),
      ]
    }
  ]
}

module.exports = createRoutesToPassportGoggle