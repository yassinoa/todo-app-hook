import React from 'react'
import { useSelector } from 'react-redux';
import './App.css';
import Cont from './components/cont/Cont';


const App = () => {
  // const {todo}=useSelector(state=>state)
  return (
    <div className='App' >
        
        <Cont/>
      </div>
  )
}

export default App