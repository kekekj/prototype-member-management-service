const fs = require('fs')
const util = require('util')
const logger = require('../../core/logger')

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
function checkLoggedIn(req, res, nex) {
  if (req.cookies['ID_AUT']) {
    
  } 
}
/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
function clearCookie(req, res, next) {
  const headers = {
    'Set-Cookie': 'ID_AUT=; Expires=Wed, 21 Oct 1970 07:28:00 GMT',
    'Set-Cookie': 'SIG_SUC=; Expires=Wed, 21 Oct 1970 07:28:00 GMT'
  }

  res.writeHead(200, "ok", headers);

  next()
}

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function respondHTMl(req, res) {
  let response

  try {
    response = await util.promisify(fs.readFile)('public/index.html')
  } catch (e) {
    logger.error(e)
      response = 'ERROR 500: INTERNAL_SERVER_ERROR'
  } finally {
    res.end(response)
  }
}

exports.clearCookie = clearCookie
exports.respondHTMl = respondHTMl