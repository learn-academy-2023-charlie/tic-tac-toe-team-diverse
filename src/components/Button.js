import React from 'react'

const Button = (props) => {
  return (
   <>
      <button onClcik = {props.handleRestart}> Restart the game!</button>
   </>
  )
}
export default Button