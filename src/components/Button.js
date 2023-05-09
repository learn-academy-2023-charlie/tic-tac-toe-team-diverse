import React from 'react'

const Button = (props) => {
  return (
   <>
      <button onClick = {props.handleRestart}> Restart the game!</button>
   </>
  )
}
export default Button