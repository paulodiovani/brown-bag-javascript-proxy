import actionCreators from '../action-creators'
import { RootState } from '../reducers'
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button onClick={() => dispatch(actionCreators.counterIncrement())}>+1</button>
      <button onClick={() => dispatch(actionCreators.counterDecrement())}>-1</button>
      <button onClick={() => dispatch(actionCreators.counterReset())}>Reset</button>
    </div>
  )
}

export default Counter
