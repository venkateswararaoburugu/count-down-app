import React, { useRef } from 'react'

const Uncontrolled = () => {
    const inputRef = useRef();
    // keeping data ref instead of stae 

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputRef.current.value)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
            name:
            <input type='text' ref={inputRef}/>
            
        </label>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}

export default Uncontrolled
