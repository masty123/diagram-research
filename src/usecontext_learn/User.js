import React, { useState, useContext } from 'react';
import { AppContext } from './usecontext_learn';

function User() {

  const {username} = useContext(AppContext);

  return (
    <div className="row"> 
      <div className="col-12 text-center my-1">
          <h2>Username: {username}</h2>
      </div>
    </div>
  );
}

export default User;
