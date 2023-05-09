import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'



const App = () => {
  
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [user, setUser] = useState(true)
  const [tempArr, setTempArr] = useState([])
  const [gameOver, setGameOver] = useState(false)
  
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
    ]

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        setGameOver(true)
        return alert (`${squares[a]}' is the winner!'`);
      }
      
    }

    if(!squares.includes(null)){
      alert ("Draw! Game Over!")
    }

    return null;
  }


  const handleClick = (selectedIndex) => {

  

    if (gameOver || tempArr.includes(selectedIndex)) {
      alert ("Game is over! please restart the game!")
    }
    else {
      setTempArr([...tempArr, selectedIndex])
      squares[selectedIndex] = user ? "X" : "O"
      setUser(!user)
      calculateWinner(squares)
      console.log("squares array: " + squares)
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