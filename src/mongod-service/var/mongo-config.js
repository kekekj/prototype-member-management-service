const mongoConfig = (() => {
  return {
    url: 'mongodb://localhost:27017',
    connectionOpts: {
      useUnifiedTopology: true
    }
  }
})()

module.exports = mongoConfig