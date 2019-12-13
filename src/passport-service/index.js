const passport = require('passport')
const initSerialization = require("./init-serialization")
const useLocalStrategy = require('./use-local-strategy')
const userFacebookStrategy = require('./use-facebook-strategy')

function PassportService() {
  return {
    getPassport() { return passport},
    initSerialization: initSerialization(passport),
    useLocalStrategy: useLocalStrategy(passport),
    userFacebookStrategy: userFacebookStrategy(passport)
  }
}

module.exports = PassportService