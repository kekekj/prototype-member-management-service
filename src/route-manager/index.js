const createRouteToPassportLocal = require('./create-routes-to-passport-local')
const creatRoutesPassportFacebook = require('./create-routes-to-passport-facebook')
const createRoutesToPassportGoggle = require('./create-routes-to-passport-google')

const Routes = {}

Routes.passportLocal = createRouteToPassportLocal()
Routes.passportFacebook = creatRoutesPassportFacebook()
Routes.passportGoogle = createRoutesToPassportGoggle()

module.exports = Routes