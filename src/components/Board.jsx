import React, { useState } from 'react'
import Square from './Square';
import { calWinner } from './WinnerCal';
import PlayerHistory from './PlayerHistory';
import "./style.css";
const Board = () => {
  const [history, setHistory] = useState([{ board: Array(9).fill(null), isXnext: true }]);
  // const [isXnext,setNext]=useState(false);
  const [currentMove, setCurrentMove] = useState(0);
  const current = history[currentMove]
  const winner = calWinner(current.board);
  const message = winner ? `The Winner is ${winner}` : ( history.length===10?"Opps Match Tie..!":`Next Player is ${current.isXnext ? "X" : "O"}`)
 // console.log(history);
  const handleSquareClick = (position) => {
    if (current.board[position] || winner) {
      return;
    }
    setHistory(pre => {
      const last = pre[pre.length - 1];
      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXnext ? "X" : "O";
        }
        return square;
      });
      return pre.concat({ board: newBoard, isXnext: !last.isXnext })
    });
    setCurrentMove(prev => prev + 1);
  }

  const renderSquare = (position) => {
    return <Square value={current.board[position]}
      onClick={() => handleSquareClick(position)} />
  }

  const moveTo=(move)=>{
    setCurrentMove(move);
  }
  //console.log(board);
  return (
    <>
       {/* <span>TIC TAC TOE</span>
        <h4><strong><i>{message}</i></strong></h4>
      <div className='main-container row'>
   

        <div className='middle-container col col-12'>

          <div className='row-container'>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className='row-container'>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className='row-container'>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}

          </div>
        </div>
        <div className='col col-12'>
        <PlayerHistory history={history} moveTo={moveTo} currentMove={currentMove}/>
        </div>
       
      </div> */}

     
      <div className='container '>
     <div className='text-center mt-2'>
     <h3>TIC TAC TOE</h3>

     </div>
       
      <div className='row mt-5'>

      <div className='col col-md-8 col-lg-6 col-12 '>
      <div className='row-container ml-2'>
       
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className='row-container ml-2'>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className='row-container ml-2'>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}

          </div>
          <div className='text-center mt-2 '>
          <h4 className='text-info'><strong><i>{message}</i></strong></h4>

     </div>
        
      </div> 
      <div className='col col-md-4 col-lg-6 col-12  '>
      <div className='ml-5 mt-2'>
      <PlayerHistory  history={history} moveTo={moveTo} currentMove={currentMove}/>
      </div>
      
    </div>

      </div>

      </div>
    </>
  )
}

export default Board;