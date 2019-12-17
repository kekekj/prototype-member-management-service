/**
 * @typedef {object} paths
 * @property {string} root
 * @property {string} login
 * @property {string} auth
 * @property {string} facebook
 * @property {string} facebook_callback
 * @property {string} google
 * @property {string} google_callback
 * @property {string} signup
 */
/**@type {paths} */
const routePaths = (() => {
  return {
    root: '/',
    login: '/login',
    auth: '/auth',
    facebook: '/facebook',
    facebook_callback: '/facebook/callback',
    google: '/google',
    google_callback: '/google/callback',
    signup: '/signup'
  }
})()

module.exports = routePaths