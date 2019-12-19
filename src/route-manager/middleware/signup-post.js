const MongooseService = require('../../mongoose-service')
const logger = require('../../core/logger')
const {createHmacBASE64, createHmacHEX} = require('../../core/Crypto')
const Model = MongooseService.getModel()

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function validateInputs(req, res, next) {
  const {
    id, password, email
  } = req.body

  const secretPass = createHmacHEX(password, id)

  const doc = new Model({
    id: id,
    secret_password: secretPass,
    email: email
  })

  try {
    await doc.save()
  } catch (e) {
    logger.error(new Error(e))

    res.cookie('SIG_SUC', '0')

    res.redirect("/signup")
    return
  }

  next() 
}

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
function setSignedCookie(req, res, next) {
  const {id} = req.body

  const secretID = createHmacBASE64(id)

  const date = new Date();
  date.setTime(date.getTime() + (30 * 1000))

  res.cookie('ID_AUT', secretID, {
    expires: date
  })
  
  next()
}

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
function setUnsignedCookie(req, res, next) {
  res.cookie('SIG_SUC', '1')
  next()
}

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
function respondPage(req, res) {
  res.redirect('/')
}

exports.validateInputs = validateInputs
exports.setSignedCookie = setSignedCookie
exports.setUnsignedCookie = setUnsignedCookie
exports.respondPage = respondPage