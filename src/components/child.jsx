import { useContext } from 'react'
import { CounterContext } from '../context/counterContext'

export function Child() {
  const {setCount, count} = useContext(CounterContext)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 23)}>
        Child incrementing parent
      </button>
    </div>
  )
}
