const mongooseConfig = (() => {
  return {
    uri: 'mongodb://localhost/test',
    connectionOptions: {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  }
})()

module.exports = mongooseConfig