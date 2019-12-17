const fs = require('fs')
const util = require('util')

function signupView() {
  return util.promisify(fs.readFile)('statics/signup.html')
}

module.exports = signupView