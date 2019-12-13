const verifyPassportSerial = require('../core/verify-passport-serial')

/**
 * @param {any} store 
 */
function route(store) {
  const {app, passport} = store

  // // @ts-ignore
  // app.get('/login', function(req, res){
  //   // Set a flash message by passing the key, followed by the value, to req.flash().]
  //   console.log(req.session)
  //   res.redirect('/');
  // });
  
  app.get('/auth/facebook', passport.authenticate('facebook'));

  
  const optsToAuth = { 
    successRedirect: '/',
    failureRedirect: '/',
    failureFlash: true,
  }

  app.get(
    '/auth/facebook/callback',
    passport.authenticate(
      'facebook',
      { failureRedirect: '/login' },
    ),
    (req, res) => {
      res.redirect('/')
    }
  );

  // app.post(
  //   '/login',
  //   passport.authenticate('local',
  //   optsToAuth, 
  //   verifyPassportSerial(passport, optsToAuth)
  // ),
  
  //   // @ts-ignore
  //   (req, res) => {
  //     req.flash('info', 'Flash is back!')
  //     console.log(req.user)
  //     console.log(req.url)
  
  // })
}

module.exports = route