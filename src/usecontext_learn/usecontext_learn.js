import React, { useState, createContext } from 'react';
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);

function Example() {
  const [username, setUsername] = useState("");

  return (
    <AppContext.Provider value={{username, setUsername}}>
    <div className="row"> 
      <div className="col-12 text-center my-1">
            <Login setUsername={setUsername}/>
      </div>  
      <div className="col-12 text-center my-1">
            <User username={username} />
      </div>  
    </div>
    </AppContext.Provider>
  );
}

export default Example;
