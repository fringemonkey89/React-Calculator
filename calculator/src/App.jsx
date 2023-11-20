import React from 'react'
import './App.css'
import Button from './components/Button.jsx'

const  App = () => {
  return (
    <div className='App'>  
      <div className='calc-wrapper'>
        <div className='row'>
          <Button symbol=""  />
          <Button symbol="" />
          <Button symbol="" />
          <Button symbol="" />
        </div>
        <div className='row'>
          <Button symbol="" />
          <Button symbol="" />
          <Button symbol="" />
          <Button symbol="" />
        </div>
        <div className='row'>
          <Button symbol="" />
          <Button symbol="" />
          <Button symbol="" />
          <Button symbol="" />
        </div>
        <div className='row'>
          <Button symbol="" />
          <Button symbol="" />
          <Button symbol="" />
          <Button symbol="" />
        </div>  
        
          
      </div>
    </div>
  )
}

export default App;