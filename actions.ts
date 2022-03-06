import actionCreators from './action-creators'

// INITIALIZES CLOCK ON SERVER
export const serverRenderClock = () => (dispatch) =>
  dispatch(actionCreators.clockTick({ light: false, ts: Date.now() }))

// INITIALIZES CLOCK ON CLIENT
export const startClock = () => (dispatch) =>
  setInterval(() => {
    dispatch(actionCreators.clockTick({ light: true, ts: Date.now() }))
  }, 1000)
