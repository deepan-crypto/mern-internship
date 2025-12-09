import { useState } from 'react'
// import Component1 from './Component1.jsx';
// import Component2 from './Component2.jsx';
// import Component3 from './Component3.jsx';
// import Component4 from './Component4.jsx';
// import Component5 from './Component5.jsx';
// import Component6 from './Component6.jsx';
// import Component7 from './Component7.jsx';
// import Component8 from './Component8.jsx';
// import Component9,{Component10}  from './Component9.jsx';
import GrandFather from './GrandFather.jsx';
import Father from './Father.jsx';
import Son from './Son.jsx';
import GrandSon from './GrandSon.jsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <h1>Learning React</h1>
      <GrandFather />
      <Father />
      <Son />
      <GrandSon />
    </div>
  );
};

export default App;
