const mongoose = require('mongoose')

const Validators = require('./var/Validators')

function createSchema() {

  /**@type {import('mongoose').SchemaDefinition} */
  const definition = {
    'id': {
      type: String,
      index: true,
      validate: Validators.toID,
      required: [true, 'id required.']
    },
    'email': {
      type: String,
      index: true,
      validate: Validators.toEmail,
      required: [true, 'email required.']
    },

    "secret_password": {
      type: String,
      index: true,
      required: [true, 'secret password required.']
    },

    "oauth": {
      "id": {
        type: String,
        index: true
      },
      "secret": {
        type: String,
        index: true
      },
      'provider': {
        type: String,
        index: true
      },
      'version': {
        type: String,
        index: true
      },
    },
  
    "created_at": {
      type: Date,
      default: new Date().toLocaleString()
    }
  }

  return new mongoose.Schema(definition)
}

module.exports = createSchema