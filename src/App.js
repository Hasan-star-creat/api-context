import './App.css';
import { createContext, useState } from 'react';
import Home from './Components/Home/Home';
import Shippon from './Components/Home/Shippon/Shippon';
import Header from './Components/Home/Header/Header';

export const catagoryContext = createContext();

function App() {
  // sibling state 
  const [count ,setCount] = useState(0)
  return (
    <catagoryContext.Provider value={count}>
        <h1>Parent part: {count}</h1>
        <Header count = {count} setCount={setCount} />
        <Shippon/>
        <Home/>  
    </catagoryContext.Provider>
  );
}

export default App;
