import { useState,useEffect} from "react";
import './App.css'
import confetti from 'canvas-confetti';
import { TURNS} from './constants';
import { checkWinner,checkEndGame } from './logic/board';
import { Board } from './components/board';
import { saveGameToStorage,resetGameStorage } from './logic/localStorage';

function App() {
  const [board, setBoard] = useState(()=>{
    //Verificamos si hay datos en el localStorage
    //Sino iniciamos con el default
    const boardFromStorage = window.localStorage.getItem('board');
    return boardFromStorage? JSON.parse(boardFromStorage):Array(9).fill(null)
  });
  const [turn, setTurn] = useState(()=>{
    //Verificamos si hay datos en el localStorage
    //Sino iniciamos con el default
    const turnFromStorage = window.localStorage.getItem('turn');
    //Si es nulo retorna  TURNS.X sino turnFromStorage
    return turnFromStorage ?? TURNS.X
  });
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    //Se resetea regresando los estados al original
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    resetGameStorage();
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
    saveGameToStorage({
      board:newBoard,
      turn:newTurn
    })

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);      
    }else if (checkEndGame(newBoard)){
      setWinner(false);//empate
    }
  }
  //Se ejecuta cada vez que se cambian las dependencias
  //Mínimo se ejecuta una vez
  useEffect(()=>{
    console.log("useEffect")
  },[turn,board])
  return (
    <Board resetGame={resetGame} board={board} turn={turn} winner={winner} updateBoard={updateBoard}></Board>
  )
}

export default App
