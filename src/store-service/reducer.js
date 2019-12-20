const _ = require('lodash')
const logger = require('../core/logger')

/** 
 * @typedef {{service: string, isAut?: boolean}} actionType
 */

/**
 * @param {{[index: string]: string}} state 
  * @param {actionType} action 
 * @param {Function} fnAssign 
 */
function createState(state, action, fnAssign) {
  return fnAssign({}, state, {
    service: action.type,
    isAut: action.isAut,
    redirect: `/${action.type}`
  })
}


/**
 * @param {{[index: string]: string}} state 
 * @param {import('redux').Action<{service: string, isAut?: boolean}>} action 
 * @returns {import('redux').Reducer}
 */
function memberService(state={}, action) {
  if (!_.isPlainObject(state)) {
    throw new Error('No expected state to be undefined.')
  }
  if (!_.isPlainObject(action)) {
    throw new Error('No expected action to be undefined.')
  }
  const assign = Object.assign

  let switchRet 
  try {
    switch (action.type) {
      case 'signup' :
        switchRet = createState(state, action, assign)
        break;
  
      case 'login' :
        switchRet = createState(state, action, assign)
        break;

      default :
        switchRet = {}
    }
  } catch (e) {
    logger.error(e)
  }
  
  return switchRet
}

exports.memberService = memberService