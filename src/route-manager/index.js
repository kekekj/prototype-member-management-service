const createRouteToPassportLocal = require('./create-routes-to-passport-local')
const creatRoutesPassport = require('./create-routes-to-passport-facebook')

/**
 * 
 * @typedef {object} route
 * @property {string} method
 * @property {string} path
 * @property {Function[]} middleware
 */
/**
 * @param {any} store 
 * @returns {{routesToPassportLocal: route[], routesToPassportFacebook: route[]}}
 */
function RouteManager(store) {
  if (typeof store === 'undefined') {
    throw new Error('No expected store to be undefined.')
  }

  const {passport} = store

  return {
    routesToPassportLocal: createRouteToPassportLocal(passport),
    routesToPassportFacebook: creatRoutesPassport(passport)
  }
}

module.exports = RouteManager