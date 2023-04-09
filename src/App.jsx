import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GrandParent } from './components/grandParent'
import { CounterContext } from './context/counterContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      <div className="App">
        <GrandParent></GrandParent>
        <button onClick={() => setCount(count + 1)}>count is: {count}</button>
      </div>
    </CounterContext.Provider>
  )
}

export default App
