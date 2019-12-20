/**
 * @typedef {object} paths
 * @property {string} LOGIN
 * @property {string} LOGIN_AJAX_CHECK_LOGGED
 * @property {string} AUTH
 * @property {string} FACEBOOK
 * @property {string} FACEBOOK_CALLBACK
 * @property {string} GOOGLE
 * @property {string} GOOGLE_CALLBACK
 * @property {string} SIGNUP
 * @property {string} SIGNUP_FACEBOOK
 * @property {string} SIGNUP_AJAX_LOGIN
 */
/**@type {paths} */
const routePaths = (() => {
  return {
    LOGIN: '/',
    LOGIN_AJAX_CHECK_LOGGED: '/ajax/login',
    AUTH: '/auth',
    FACEBOOK: '/facebook',
    FACEBOOK_CALLBACK: '/facebook/callback',
    GOOGLE: '/google',
    GOOGLE_CALLBACK: '/google/callback',
    SIGNUP: '/signup',
    SIGNUP_FACEBOOK: '/signup/facebook',
    SIGNUP_AJAX_LOGIN: '/signup/ajax/login'
  }
})()

module.exports = routePaths