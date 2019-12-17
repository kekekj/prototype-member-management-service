const MongooseService = require('../../mongoose-service')
const logger = require('../../core/logger')

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
function signupPost(req, res) {
  const Model = MongooseService.getModel()
  
  const {
    id, password, email
  } = req.body

  const doc = new Model({
    id: id,
    password: password,
    email: email
  })

  doc.save((err, doc) => {
    if (err) {
      logger.error(err)  
      res.end('Error 505')    
      return
    }

    logger.debug(doc)
    res.end()
  })  
}

module.exports = signupPost