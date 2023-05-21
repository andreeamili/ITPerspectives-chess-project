import { useState } from 'react'
import './App.css'
import ChessBoard from './components/ChessBoard/ChessBoard'
import ChessPieces from './components/ChessPieces/ChessPieces'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <ChessBoard />
    </div>
  )
}

export default App
