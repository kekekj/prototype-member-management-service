const  bodyParser = require("body-parser");
const express = require('express')
const flash = require('connect-flash');
const session = require("express-session")
const morganWrapper = require('../core/morgan-wrapper')

/**
 * @param {object} store 
 */
function mountMiddleware(store) {
  const {app, passport} = store
  
  app.use(express.static('public'))
  app.use(flash());
  app.use(session({ secret: "cats", resave: true, saveUninitialized: true}));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(morganWrapper.log())
  app.use(morganWrapper.logFile())
  app.use(passport.initialize())
  app.use(passport.session());
}

module.exports = mountMiddleware