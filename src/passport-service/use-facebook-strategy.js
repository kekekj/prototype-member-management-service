const FacebookStrategy = require('passport-facebook').Strategy;
const clientConfig = require('./var/client-config')

/**
 * @param {import('passport')} passport 
 */
function useFacebookStrategy(passport) {
  return (mongooseModel) => {
    passport.use(new FacebookStrategy({
        ...clientConfig.facebook
      },

      (accessToken, refreshToken, profile, done) => {
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
}

module.exports = useFacebookStrategy