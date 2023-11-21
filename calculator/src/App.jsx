import React from 'react'
import './App.css'
import Button from './components/Button.jsx'
import Input from "./components/Input.jsx"
import { useState} from 'react'

const  App = () => {

  const [text, setText] = useState("")
  const buttonColor = "#f2a33c"
  return (
    <div className='App'>  
      <div className='calc-wrapper'>
        <Input />
        <div className='row'>
          <Button symbol="7"  />
          <Button symbol="8" />
          <Button symbol="9" />
          <Button symbol="/" color={buttonColor} />
        </div>
        <div className='row'>
          <Button symbol="4" />
          <Button symbol="5" />
          <Button symbol="6" />
          <Button symbol="*" color={buttonColor}  />
        </div>
        <div className='row'>
          <Button symbol="1" />
          <Button symbol="2" />
          <Button symbol="3" />
          <Button symbol="+" color={buttonColor}  />
        </div>
        <div className='row'>
          <Button symbol="0" />
          <Button symbol="." />
          <Button symbol="=" />
          <Button symbol="-" color={buttonColor}  />
        </div>  
        <Button symbol="Clear" color="red"/> 
      </div>
    </div>
  )
}

export default App;