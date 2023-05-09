import React from 'react'

const Button = (props) => {
  return (
   <>
      <div className="button">
        <button className ="button" onClick = {props.handleRestart}> Restart the game!</button>
        </div>
   </>
  )
}
export default Button