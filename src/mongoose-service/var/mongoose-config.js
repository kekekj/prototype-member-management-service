const mongooseConfig = (() => {
  return {
    uri: 'mongodb://localhost/test',
    connectionOptions: {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    modelName: 'testuser'
  }
})()

module.exports = mongooseConfig