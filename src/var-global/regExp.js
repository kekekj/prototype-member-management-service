exports.toID = {
  NO_SPECIAL_CHARACTER_SIZE_6_TO_10: /^[a-zA-Z0-9]{6,10}$/,
}

exports.toPassword = {
  VALID_PASSWORD_SIZE_8_TO_12: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/
}

exports.toEmail = {
  VALID_EMAIL: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
}