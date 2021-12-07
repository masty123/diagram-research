import React, { useContext, useState } from 'react';
import { AppContext } from './usecontext_learn';


function Login() {
  const {setUsername} = useContext(AppContext);
  return (
    <div className="row"> 
      <div className="col-12 text-center my-1">
          <input onChange={(event) => setUsername(event.target.value)  }/>
      </div>
    </div>
  );
}

export default Login;
