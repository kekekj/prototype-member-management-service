const  LocalStrategy = require('passport-local').Strategy;

/**
 * @param {any} passport passport module
 */
function useLocalStrategy(passport) {
  return (mongooseModel) => {
  

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
}

module.exports = useLocalStrategy