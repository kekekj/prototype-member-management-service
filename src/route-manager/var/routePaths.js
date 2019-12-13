/**
 * @typedef {object} paths
 * @property {string} root
 * @property {string} login
 * @property {string} auth
 * @property {string} facebook
 * @property {string} facebook_callback
 */
/**@type {paths} */
const routePaths = (() => {
  return {
    root: '/',
    login: '/login',
    auth: '/auth',
    facebook: '/facebook',
    facebook_callback: '/facebook/callback'
  }
})()

module.exports = routePaths