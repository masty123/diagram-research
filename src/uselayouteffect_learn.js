import React, { useLayoutEffect, useEffect, useRef } from 'react';




function Example() {

const inputRef = useRef(null);

useEffect(() => {
  // console.log("useEffect");
  console.log(inputRef.current.value);
},[]);


useLayoutEffect(() => {
  // console.log("useLayoutEffect");
  inputRef.current.value = "Hello"
},[]);

  return (
    <div className="row"> 
      <div className="col-12 text-center my-1">
          <input ref={inputRef} value="MARK" />
      </div>
    </div>
  );
}

export default Example;
