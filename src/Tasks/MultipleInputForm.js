import React, { useState } from 'react'

const MultipleInputForm = () => {
    const[formData,setFormdata] = useState({
        firstName:'',
        lastName:'',
        email:''
    });

    const handleChange = (event) => {
        // destructuring is a feature in javascript that allows you to extract from objects into distinct variables
        const{name,value} = event.target;
        setFormdata({
            ...formData,
            [name] : value
        })
    };
    const handleSubmit = (event) => {

        event.preventdefault();
        console.log(formData)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <labe>
            firstName:
            <input type='text'
            name='firstname'
            value={formData.firstName}
            onChange={handleChange}/>
        </labe>
        <label>
            lastName:
            <input type='text'
            name='lastname'
            value={formData.lastName}
            onChange={handleChange}/>
        </label>
        <label>
            email:
            <input type='text'
            name='email'
            value={formData.email}
            onChange={handleChange}/>
        </label>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default MultipleInputForm
