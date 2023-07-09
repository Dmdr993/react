import { useState } from 'react';
import './App.css'
import confetti from 'canvas-confetti';
import { TURNS} from './constants';
import { checkWinner,checkEndGame } from './logic/board';
import { Board } from './components/board';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    //Se resetea regresando los estados al original
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  }
  
  const updateBoard = (index) => {
    //No sobreescribir cuando hay una ficha o hay ganador
    if (board[index] || winner) return
    //Siempre se crea una nueva copia, los estados deben ser inmutables
    const newBoard = [...board]
    newBoard[index] = turn;
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn)

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);      
    }else if (checkEndGame(newBoard)){
      setWinner(false);//empate
    }
  }
  return (
    <Board resetGame={resetGame} board={board} turn={turn} winner={winner} updateBoard={updateBoard}></Board>
  )
}

export default App
