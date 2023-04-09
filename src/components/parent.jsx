import { useContext } from 'react'
import { CounterContext } from '../context/counterContext'
import { Child } from './child'

export default function Parent() {
  const { setCount } = useContext(CounterContext)
  return (
    <>
      <div>Parent</div>
      <button onClick={()=>{setCount((count)=>{
        return count+1
      })}}>Parent can increment</button>
      <Child></Child>
    </>
  )
}
