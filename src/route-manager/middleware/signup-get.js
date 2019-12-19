const fs = require('fs')
const util = require('util')
const logger = require('../../core/logger')

/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
async function readIndexPage(req, res) {
  let response

  try {
    response = await util.promisify(fs.readFile)('public/signup.html')
  } catch (e) {
    logger.error(e)
      response = 'ERROR 500: INTERNAL_SERVER_ERROR'
  } finally {
    res.end(response)
  }
}

exports.readIndexPage = readIndexPage