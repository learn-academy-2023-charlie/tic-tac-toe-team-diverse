import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [user, setUser] = useState(true)

  const handleClick = (selectedIndex) => {
    const newSquares = [...squares]

    newSquares[selectedIndex] = user ? "X" : "O"
    setSquares(newSquares)
    setUser(!user)

  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Square 
      squares={squares}
      handleClick = {handleClick}
      />
    </>
  )

}

export default App