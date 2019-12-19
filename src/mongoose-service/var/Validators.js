const regExp = require('../../var-global/regExp')

function createMsg(props) { 
  return props.reason.message;
}

const toID = [
  {
    validator: (v) => {
      if (v.length < 6 || v.length > 10) {
        throw new Error('Length of id must be between 6 and 10.')
      }
    }
  },
  {
    validator: (v) => {
      if (!regExp.toID.NO_SPECIAL_CHARACTER_SIZE_6_TO_10.test(v)) {
        throw new Error('No special character allowed.')
      }
    },
    message: createMsg
  }
]

const toPassword = [
  {
    validator: (v) => {
      if(!regExp.toPassword.VALID_PASSWORD_SIZE_8_TO_12.test(v)) {
        throw new Error('Invalid password')
      }
    },
    message: createMsg
  }
]

const toEmail = [
  {
    validator: (v) => {
      if (!regExp.toEmail.VALID_EMAIL.test(v)) {
        throw new Error('Invalid email.')
      }
    },
    message: createMsg
  }
]

exports.toID = toID
exports.toPassword = toPassword
exports.toEmail = toEmail