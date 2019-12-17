const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy;
const clientConfig = require('./var/client-config')
const logger = require('../core/logger')

/**
 * @param {any} mongooseModel 
 */
function useFacebook(mongooseModel) {
  if (typeof mongooseModel === 'undefined') {
    logger.error('No expected mongooseModel to be undefined.')
    return
  }

    passport.use(new FacebookStrategy({
        ...clientConfig.facebook
      },

      (accessToken, refreshToken, profile, done) => {
        logger.debug(`accessToken: ${accessToken}`)
        logger.debug(`refreshToken: ${refreshToken}`)
        logger.debug(`profile: ${profile.id}`)

        mongooseModel.findOne({ username: ''}, (err, user) => {
          if (err) {
            return done(err)
          }

          if (!user) {
            return done(
              null, 
              false, 
              { message: 'Incorrect username.' }
            )
          }

          return done(null, user)
        })
      }
    ))
  
}

module.exports = useFacebook