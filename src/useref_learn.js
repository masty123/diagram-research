import React, { useState, useEffect, useReducer, useRef } from 'react';
import axios from 'axios';
function Example() {
  const inputRef = useRef(null);

  const onClick = () => {
      // console.log(inputRef.current.value);
      inputRef.current.focus();
      // inputRef.current.value = "";

  }

  return (
    <div className="row"> 
      <div className="col-12 text-center my-1">
          {/* <h1>{inputRef}</h1> */}
      </div>

      <div className="col-12 text-center my-1">
          <input type="text" placeholder="Ex..." ref={inputRef} />
      </div>

      <div className="col-12 text-center my-1">
         <button onClick={onClick}>Change text</button>
      </div>


    </div>
  );
}

export default Example;
