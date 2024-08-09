import React from 'react'
import Countdowntimer from './Tasks/Countdowntimer'

const App = () => {
  return (
    <div>
      <h2>Counter timer </h2>
      <Countdowntimer initialMinutes={1} intilalSeconds={30}/>
    </div>
  )
}

export default App

