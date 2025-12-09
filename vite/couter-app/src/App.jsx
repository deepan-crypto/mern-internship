import { useState } from 'react'
import Component1 from './Component1.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Learning React</h1>
      <Component1></Component1>
    </div>
  )
}

export default App
