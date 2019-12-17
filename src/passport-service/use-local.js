const passport = require('passport')
const  LocalStrategy = require('passport-local').Strategy;
const logger = require('../core/logger')

/**
 * @param {any} mongooseModel 
 * @returns {() => void} 
 */
function useLocal(mongooseModel) {
  if (typeof mongooseModel === 'undefined') {
    logger.error(new Error('No expected localStore to be undefined.'))
    return 
  }
  
  passport.use(new LocalStrategy(
      (username, password, done) => {

        // @ts-ignore
        mongooseModel.findOne({ username: username }, (err, user) => {
          if (err) { 
            return done(err); 
          }
    
          if (!user) {
            return done(null, false, 
              { message: 'Incorrect username.' }
              );
          }
    
          // if (!user.validPassword(password)) {
          //   return done(null, false, { message: 'Incorrect password.' });
          // }
          
          return done(null, user);
        });
      }
  ));
  
}

module.exports = useLocal