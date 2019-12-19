/**
 * @typedef {object} paths
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
    login: '/',
    login_ajax_check_logged: '/ajax/login',
    auth: '/auth',
    facebook: '/facebook',
    facebook_callback: '/facebook/callback',
    google: '/google',
    google_callback: '/google/callback',
    signup: '/signup',
    signup_ajax_login: '/signup/ajax/login'
  }
})()

module.exports = routePaths