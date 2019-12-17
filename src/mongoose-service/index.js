const mongoose = require('mongoose')
const connectMongoose = require('./connect-mongoose')
const connectionHandler = require('./connection-eventHandler')
const createSchema = require('./create-schema')
const {modelName} = require('./var/mongoose-config')

function setConfig() {
  mongoose.set('useCreateIndex', true);
}

function initModel() {
  const schema = createSchema()
  return mongoose.model(modelName, schema)
}

const MongooseService = (() => {
  let Model
  const {readyState} = mongoose.connection

  return {
    connectDB() {
      setConfig()

      if (readyState === 0) {
        connectMongoose()
      }

      connectionHandler()
    },
    getModel() {
      if (typeof Model === 'undefined') {
        Model = initModel()
      }
      return Model
    },
  }
})()

module.exports = MongooseService


