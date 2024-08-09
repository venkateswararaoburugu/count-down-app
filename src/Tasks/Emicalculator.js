import React, { useState } from 'react'

const Emicalculator = () => {
    const[Principle,setPrincipal] = useState('');
    const[rate,setRate] = useState('');
    const[time,setTime] = useState('');
    const[emi,setEmi] = useState(null);

    const calculateEmi = () => {
        const p = parseFloat(Principle);
        const T= parseFloat(time)/12
        const R = parseFloat(rate)/12/100

        const emiValue = (p*  R* Math.pow(1 + R,T))/(Math.pow(1 + R, T) -1);
        setEmi(emiValue.toFixed(2));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        calculateEmi();
    };

  return (
    <div>
      <h2>Emi calculator</h2>
      <form onSubmit={handleSubmit}>
        <div>
            <label>Principle amount:</label>
            <input
            type='number' 
            value={Principle}
            onChange={(e) => setPrincipal(e.target.value)} required/>
        </div>
        <div>
            <label>Interest rate(Annual 1%)</label>
            <input
            type='number' 
            value={time}
            onChange={(e) => setTime(e.target.value)} required/>
        </div>
        <div>
            <label>Time period (years)</label>
            <input
            type='number' 
            value={rate}
            onChange={(e) => setRate(e.target.value)} required/>
        </div>
        <button type='submit'> calculate Emi</button>

      </form>
      {emi !== null && (
        <div>your Emi is {emi}</div>
      )}
    </div>
  )
}

export default Emicalculator
