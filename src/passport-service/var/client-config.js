const {httpS_options} = require('../../var-global/connection')

const createProp = ({id, secret, cbUrl}) => ({
  clientID: id,
  clientSecret: secret,
  callbackURL: cbUrl
})

const clientConfig = (() => {
  const {protocol, host, port} = httpS_options

  const facebook = createProp({
    id: '823220831432436',
    secret: '57fa93283ba8c5a46023f92237b2f058',
    cbUrl: `${protocol}://${host}:${port}/auth/facebook/callback`
  })

  const google = createProp({
    id: '619895589476-ne33g9ehjtmbod2jq1o74m6qv7imh8tp.apps.googleusercontent.com',
    secret: 'OBcDbQhz8rMV2k8alkfoE3fQ',
    cbUrl: `${protocol}://${host}:${port}/auth/google/callback`
  })

  return {
    facebook,
    google
  }
})()

module.exports = clientConfig