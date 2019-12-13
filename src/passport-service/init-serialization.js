function initSerialization(passport) {
  return (mongooseModel) => {
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
}

module.exports = initSerialization