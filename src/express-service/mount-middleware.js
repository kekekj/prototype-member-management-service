const  bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const flash = require('connect-flash');
const session = require("express-session")
const passport = require('passport')
const morganWrapper = require('../core/morgan-wrapper')

/**
 * @param {object} app 
 */
function mountMiddleware(app) {
  // app.use(express.static('public'))
  app.use(flash());
  app.use(session({ secret: "cats", resave: true, saveUninitialized: true}));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser())
  app.use(morganWrapper.log())
  app.use(morganWrapper.logFile())
  app.use(passport.initialize())
  app.use(passport.session());
}

module.exports = mountMiddleware