import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

let tempArr = []

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [user, setUser] = useState(true)
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }


  const handleClick = (selectedIndex) => {
    console.log(tempArr);
    if (tempArr.includes(selectedIndex)) {
      alert ("No, you can't")
    } else {
    tempArr.push(selectedIndex)
    // console.log(tempArr);
    // const newSquares = [...squares]
    // newSquares[selectedIndex] = user ? "X" : "O"
    // setSquares(newSquares)
    squares[selectedIndex] = user ? "X" : "O"
    setUser(!user)
    calculateWinner(squares)
    }
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