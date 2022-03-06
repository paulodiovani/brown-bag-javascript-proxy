import * as existingActionCreators from './actions'
import * as types from './types'
import { isUndefined, omitBy, snakeCase } from 'lodash'

const missingActionCreators = {
  // standard action creators are catched by this method
  get(target: typeof existingActionCreators, prop: string) {
    if (typeof target[prop] !== 'undefined') {
      return target[prop]
    }

    /**
     * @function actionCreator
     * @param {object} payload action payload (optional)
     * @param {Error[]} errors array of errors (optional)
     * @returns {object} redux action { type, payload, errors }
     */
    return function actionCreator(payload, errors) {
      const type = snakeCase(prop).toUpperCase()

      if (!types[type]) {
        throw new Error(`Inexistent action: ${type}`)
      }

      const action = { type, payload, errors }
      return omitBy(action, isUndefined)
    }
  },
}

/**
 * Usage:
 * import actionCreators from './actionCreators'
 * actionCreators.counterIncrement() -> returns { type: 'COUNTER_INCREMENT' }
 * actionCreators.clockTick(payload) -> returns { type: 'CLOCK_TICK', payload }
 */
const actionCreators = new Proxy(
  existingActionCreators,
  missingActionCreators,
)

export default actionCreators
