import React from 'react'
import "./style.css";
const Square = ({value,onClick}) => {

  console.log(value);
    //console.log(props);
  return (
   <>
    <button type='button' style={{color:value==="X"?'blue':'red'}}  onClick={onClick} className='row-btn'>{value}</button>
   </>
  )
}

export default Square;