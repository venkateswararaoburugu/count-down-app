import React, {useState, useEffect } from 'react'

const Countdowntimer = ({initialMinutes = 0,intilalSeconds = 0}) =>{
const [minute,setMinutes] = useState(initialMinutes);
const[seconds,setSeconds] = useState(intilalSeconds);


useEffect(() => {
  let interval = setInterval(() => {
    if(seconds > 0 ){
      setSeconds(seconds-1)
      }else{
        if(minute){
          setMinutes(minute - 1);
          setSeconds(59)
        }else{
          clearInterval(interval)
        }
      }
    },1000);

    return () => clearInterval(interval)
  },[seconds,minute])
  return (
    <div>
      {minute === 0 && seconds === 0 ? (
        <h1>Times up</h1>

      ):(
        <h1>
          {minute} : {seconds < 10 ? `0${seconds}` : seconds}
        </h1>

      )}
    </div>
  )
}


export default Countdowntimer

