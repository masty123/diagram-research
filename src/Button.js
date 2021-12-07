import React, { forwardRef, useImperativeHandle, useState } from 'react';




const Button = forwardRef( (props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    altToggle() {
      setToggle(!toggle);
    }
  }));


  return (
    <>
    <button
      onClick={() => {
        setToggle(!toggle);
      }}
    >
        Button from child
    </button> <br/>
    {toggle && <span className="col-12">Toggle</span>}
    </>
  )
})

export default Button;
