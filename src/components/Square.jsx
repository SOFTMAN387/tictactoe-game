import React from 'react'
import "./style.css";
const Square = ({value,onClick}) => {
    //console.log(props);
  return (
   <>
    <button type='button' onClick={onClick} className='row-btn'>{value}</button>
   </>
  )
}

export default Square;