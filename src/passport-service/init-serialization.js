const passport = require('passport')
const logger = require('../core/logger')

/**
 * @param {any} mongooseModel 
 * @returns {() => void} 
 */
function initSerialization(mongooseModel) {
  if (typeof mongooseModel === 'undefined') {
    logger.error('No expected localInjection to be undefined.')
    return 
  }
    // @ts-ignore
    passport.serializeUser((user, done) => {
      done(null, user.id);
    });
  
    // @ts-ignore
    passport.deserializeUser((id, done) => {
    // @ts-ignore
      mongooseModel.findById(id, (err, user) => {
        done(err, user);
      });
    });
  
}

module.exports = initSerialization