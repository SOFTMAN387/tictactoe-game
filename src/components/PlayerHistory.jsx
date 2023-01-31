import React from 'react'

const PlayerHistory = ({history,moveTo,currentMove}) => {
  return (
   <>
   <ol >
   {history.map((_,index)=>{
    return (<>
        <li  key={index}>
            <button type='button' style={{color:index===currentMove?'blue':'black'}} onClick={()=>moveTo(index)}>{index===0?"Go to game start":`Go to move #${index}`}</button>
         </li>
    </>)
   })}
  
   </ol>
   
   </>
  )
}

export default PlayerHistory;