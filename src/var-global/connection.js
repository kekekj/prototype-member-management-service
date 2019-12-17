const connection = (() => {
  /**@type {import('http').RequestOptions} */
  const http_options = {
    family: '4',
    host: 'localhost',
    port: 3333,
    protocol: 'http',
    localAddress: '127.0.0.1'
  }

  /**@type {import('http').RequestOptions} */
  const httpS_options = {
    family: '4',
    host: 'localhost',
    port: 5555,
    protocol: 'https',
    localAddress: '127.0.0.1'
  }

  return {
    http_options,
    httpS_options
  }
})()

module.exports = connection
