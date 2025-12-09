import { useState } from 'react'
import Component1 from './Component1.jsx';
import Component2 from './Component2.jsx';
import Component3 from './Component3.jsx';
import Component4 from './Component4.jsx';
import Component5 from './Component5.jsx';
import Component6 from './Component6.jsx';
import Component7 from './Component7.jsx';
import Component8 from './Component8.jsx';
import Component9,{Component10}  from './Component9.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Learning React</h1>
      <Component1></Component1>
      <Component2></Component2>
      <Component3></Component3>
      <Component4></Component4>
      <Component5></Component5>
      <Component6></Component6>
      <Component7></Component7>
      <Component8></Component8>
      <Component9></Component9>
      <Component10></Component10>
    </div>
  );
};

export default App
