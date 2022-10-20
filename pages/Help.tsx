import React, { useState } from 'react'
import validator from 'validator'

const Help = () => {
  const [errorMessage, setErrorMessage] = useState('')
  const validate = (value) => {

    if (validator.isURL(value)) {
      setErrorMessage('Is Valid URL')
    } else {
      setErrorMessage('Is Not Valid URL')
    }
  }
  return (
    <>
     
      <div style={{
        marginLeft: '200px',
      }}>
        <pre>
          <h2>Validating URL/Test the Plugin </h2>
          <span>Enter URL: </span><input type="text"
            onChange={(e) => validate(e.target.value)}></input> <br />
          <span style={{
            fontWeight: 'bold',
            color: 'red',
          }}>{errorMessage}</span>
        </pre>
      </div>

    </>
  )
}

export default Help