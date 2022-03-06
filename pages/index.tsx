import Examples from '../components/examples'
import Link from 'next/link'
import actionCreators from '../action-creators'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

const Index = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actionCreators.startClock())
  }, [dispatch])

  return (
    <>
      <Examples />
      <Link href="/show-redux-state">
        <a>Click to see current Redux State</a>
      </Link>
    </>
  )
}

export default Index
