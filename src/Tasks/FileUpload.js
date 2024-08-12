import React, { useRef } from 'react'

const FileUpload = () => {
    const fileinputref = useRef()

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(fileinputref.current.files[0])
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <lable>
            input file:
            <input type='file' ref={fileinputref}/>

        </lable>
        <button type='submit'>upload</button>
      </form>
    </div>
  )
}

export default FileUpload
