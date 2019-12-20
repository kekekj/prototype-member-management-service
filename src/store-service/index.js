const {createStore} = require('redux')
const {memberService} = require('./reducer')

/**@type {import('redux').Store} */
module.exports = createStore(memberService) 