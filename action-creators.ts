import * as existingActionCreators from './actions'
import ActionTypes from './types'
import { isUndefined, omitBy, snakeCase } from 'lodash'

type CamelCase<S extends string> = S extends `${infer P1}_${infer P2}${infer P3}`
  ? `${Lowercase<P1>}${Uppercase<P2>}${CamelCase<P3>}`
  : Lowercase<S>

type Action = {
  type: ActionTypes
  payload?: any
  errors?: Error[]
}

type ActionCreators = {
  [Property in ActionTypes as CamelCase<ActionTypes>]: (payload?: any, errors?: Error[]) => Action
}

const missingActionCreators = {
  // standard action creators are catched by this method
  get(target: typeof existingActionCreators, prop: keyof ActionCreators): ActionCreators[keyof ActionCreators] {
    if (typeof target[prop] !== 'undefined') {
      return target[prop]
    }

    /**
     * @function actionCreator
     * @param {object} payload action payload (optional)
     * @param {Error[]} errors array of errors (optional)
     * @returns {object} redux action { type, payload, errors }
     */
    return function actionCreator(payload?: any, errors?: Error[]) {
      const type = snakeCase(prop).toUpperCase()

      if (!ActionTypes[type]) {
        throw new Error(`Inexistent action: ${type}`)
      }

      const action = { type, payload, errors }
      return omitBy(action, isUndefined) as Action
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
) as ActionCreators & typeof existingActionCreators

export default actionCreators
