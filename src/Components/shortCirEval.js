import React, { useState } from 'react';
import '../App.css';
export const ShortCirEval = () => {
 const [demo, setDemo] =useState("testing");

  return (
    <div>
        <h1 className='h1class'>{ demo || "Verma"}</h1>
        <h1 className='h1class'>{ demo && "verma"}</h1>
    </div>
  )
};
export default ShortCirEval;
