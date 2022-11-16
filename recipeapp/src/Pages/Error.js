import React from 'react'
import ErrorImg from '../Images/ErrorPage404-02.jpg'

function Error() {
  const error={
    display:'flex',
    justifyContent:'center',
  }
  return (
    <>
    <div style={error}>
        <img src={ErrorImg} alt="" style={{height:'70vh', width:'50vw'}}/>
    </div>
    <h3 style={error}>Return to Home Page</h3>
    </>
  )
}

export default Error