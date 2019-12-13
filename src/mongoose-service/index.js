const mongoose = require('mongoose')
const _ = require('lodash')
const connectMongoose = require('./connect-mongoose')
const connectionHandler = require('./connection-eventHandler')

function MongooseService(state) {
  const { definition, modelName } = state

  const schema = new mongoose.Schema(definition)
  const model = mongoose.model(modelName, schema)
  
  return {
    connect() {
      if (mongoose.connection.readyState === 0) {
        connectMongoose(mongoose)
        connectionHandler(mongoose)
      }
    },
    model,
    schema
  }
}

// function MongooseService(state) {
//   if (mongoose.connection.readyState === 0) {
//     connectMongoose(mongoose)
//     connectionHandler(mongoose)
//   }
  
//   const { definition, modelName } = state

//   const schema = new mongoose.Schema(definition)
//   const model = mongoose.model(modelName, schema)

//   return {
//     model,
//     schema
//   }
// }


module.exports = MongooseService