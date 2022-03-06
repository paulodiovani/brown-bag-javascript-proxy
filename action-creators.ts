import * as types from './types'
import { isUndefined, omitBy, snakeCase } from 'lodash'

// action creators that doesn't fit the standards dsl, if any
const existingActionCreators = {}

const missingActionCreators = {
  // standard action creators are catched by this method
  get(_target, prop) {
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
