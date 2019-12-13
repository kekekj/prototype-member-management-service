const connection = require('../../var/connection')

const createProp = (id, secret, cbUrl) => ({
  clientID: id,
  clientSecret: secret,
  callbackURL: cbUrl
})

const clientConfig = (() => {
  const {port} = connection

  const facebook = createProp(
    '823220831432436',
    '57fa93283ba8c5a46023f92237b2f058',
    `http://localhost:${port}/auth/facebook/callback`
  )

  return {
    facebook
  }
})()

module.exports = clientConfig