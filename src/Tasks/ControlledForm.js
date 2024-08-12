import React, { useState } from 'react'

const ControlledForm = () => {
    // assign state varible input value

    const[inputValue,setInputValue] =useState('');

    // handling input value
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    // handling submit value and mangining from submission

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputValue);
    }
  return (
    <div>
        {/* create form tag used for creating form and collecting user input */}
        {/* onsubmit is used specify a javascript function will be excuted when form is submited */}
        <from onSubmit={handleSubmit}>
           <label>
            {/* label for input element*/}
            Name:
           <input type='text' value={inputValue} onChange={handleChange} />
           {/* input tag  create interactive controles in webforms */}
           </label>
            
            {/* creating clickble buttons */}
            <button type='submit'>submit</button>

          
        </from>
      
    </div>
  )
}

export default ControlledForm
