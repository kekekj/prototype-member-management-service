const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy;
const clientConfig = require('./var/client-config')
const Store = require('../store-service')
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
        logger.info(`accessToken: ${accessToken}`)
        logger.info(`refreshToken: ${refreshToken}`)
        logger.info(`profile: ${profile.id}`)

        console.log(Store.getState())

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