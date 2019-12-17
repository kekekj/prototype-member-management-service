const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const clientConfig = require('./var/client-config')
const logger = require('../core/logger')

/**
 * @param {any} mongooseModel 
 */
function useGoogle(mongooseModel) {
  if (typeof mongooseModel === 'undefined') {
    logger.error(new Error('No expected mongooseModel to be undefined.'))
    return
  }
    
    passport.use(new GoogleStrategy({
      ...clientConfig.google
      },
      (accessToken, refreshToken, profile, done) => {
        mongooseModel.findOne({ username: profile.id }, function (err, user) {
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
        });
      }
    ));
  
}

module.exports = useGoogle