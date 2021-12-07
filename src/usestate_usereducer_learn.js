import React, { useState, useEffect, useReducer } from 'react';

const reducer =  (state, action) => {
  switch(action.type){
      case "INCREMENT":
        return {count: state.count + 1, showText: state.showText};
      case "toggleShowText":
        return {count: state.count, showText: !state.showText};
      default:
        return state;
  }
} 

function Example() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, {count: 0 , showText: false})
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className="row">
      {/* <div className="col-12 text-center">
          <p>You clicked {count} times</p>

      </div>        
      <div className="col-12 text-center">
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div> */}
      
      <div className="col-12 text-center my-1">
         <button onClick={() =>  {
              dispatch({type: "INCREMENT"});
              dispatch({type: "toggleShowText"});
         }}>
          Click me
        </button>
      </div>
      <div className="col-12 text-center">
          {state.count}
      </div>
      <div className="col-12 text-center">
          {state.showText && <p>This is a text</p>}
      </div>
    </div>
  );
}

export default Example;
