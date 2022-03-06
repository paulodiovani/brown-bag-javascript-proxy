import { combineReducers } from 'redux'
import ActionTypes from './types'

// COUNTER REDUCER
const counterReducer = (state = 0, { type }) => {
  switch (type) {
    case ActionTypes.COUNTER_INCREMENT:
      return state + 1
    case ActionTypes.COUNTER_DECREMENT:
      return state - 1
    case ActionTypes.COUNTER_RESET:
      return 0
    default:
      return state
  }
}

// INITIAL TIMER STATE
const initialTimerState = {
  lastUpdate: 0,
  light: false,
}

// TIMER REDUCER
const timerReducer = (state = initialTimerState, { type, payload }) => {
  switch (type) {
    case ActionTypes.CLOCK_TICK:
      return {
        lastUpdate: payload.ts,
        light: !!payload.light,
      }
    default:
      return state
  }
}

// COMBINED REDUCERS
const reducers = {
  counter: counterReducer,
  timer: timerReducer,
}

const rootReducer = combineReducers(reducers)

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
