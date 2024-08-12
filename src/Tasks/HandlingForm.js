
import React, { useState } from 'react'

const HandlingForm = () => {
    const[formData,setFormData] = useState({email:"",password:''});
    const[errors,setErrors] = useState([]);

    const handleChange = (event) => {
        const {name,value} = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    };

    const validate = () => {
        const errors = {};
        if(!formData.email){
            errors.email = 'email is requird'
        }
        if(formData.password.length < 6){
            errors.password = 'password must be at least 6 characters long';
        }
        return errors
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const validateErrors= validate();
        if(Object.keys(validateErrors).length === 0){
            console.log(formData)
        }else{
            setErrors(validateErrors)
        }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}> 
        <label>
            email:
            <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}/>

            {errors.email && <p>{errors.email}</p>}
        </label>
        <label>
            password:
            <input
            type='password'
            name='password'
            value={formData.p}
            onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
        </label>
        <button type='submit'> submit

        </button>
      </form>
    </div>
  )
}

export default HandlingForm
