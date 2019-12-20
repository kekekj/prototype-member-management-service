const PATH = require('../var/ROUTE_PATH')
const store = require('../../store-service')

function dispatchServiceType(req, res, next) {
  store.dispatch({
    type: 'signup',
  })
  next()
}

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
function respond(req, res) {
  res.redirect(PATH.AUTH + PATH.FACEBOOK)
}

exports.dispatchServiceType = dispatchServiceType
exports.respond = respond