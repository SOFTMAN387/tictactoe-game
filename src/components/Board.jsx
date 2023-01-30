import React,{useState} from 'react'
import Square from './Square';
import { calWinner } from './WinnerCal';
import "./style.css";
const Board = () => {
  const [board,setBoard]=useState(Array(9).fill(null));
  const [isXnext,setNext]=useState(false);
  const winner=calWinner(board);
  const message=winner?`The Winner is ${winner}`:`Next Player is ${isXnext ?"X":"O"}`
  //console.log(winner);
  const handleSquareClick=(position)=>{
    if(board[position] ||winner){
      return;
    }
    setBoard(pre=>{
      return pre.map((square,pos)=>{
        if(pos===position){
          return isXnext ?"X":"O";
        }
        return square;
      })
    });
    setNext(prev=>!prev);
  }

  const renderSquare=(position)=>{
    return <Square value={board[position]}
    onClick={()=>handleSquareClick(position)} />
  }
  //console.log(board);
  return (
  <>
    <div className='main-container'>
    <h3>TIC TAC TOE</h3>
    <h4>{message}</h4>

      <div className='middle-container'>
   
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
       
    </div>
  </>
  )
}

export default Board;