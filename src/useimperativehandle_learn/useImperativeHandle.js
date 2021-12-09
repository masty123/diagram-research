import React, { useLayoutEffect, useEffect, useRef } from 'react';
import Button from "./Button";



function Example() {
  const buttonRef = useRef(null);


  return (
    <div className="row"> 
      <div className="col-12 text-center my-1">
          <button onClick={() => {buttonRef.current.altToggle()}}>Button From Parent</button>
      </div>
      <div className="col-12 text-center my-1">
          <Button ref={buttonRef} />
      </div>
    </div>
  );
}

export default Example;
