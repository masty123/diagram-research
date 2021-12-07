import React, { useState, useEffect, } from 'react';
import axios from 'axios';
function Example() {
  const [data, setData] = useState();
  const  [count, setCount] = useState(0);
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments")
    .then((response) =>{
        // console.log(response.data);
        setData(response.data[0].email);
        console.log("API called");
    })
  },[]);
// },[count]);


  return (
    <div className="row">   
      <div className="col-12 text-center my-1">
        <button onClick={() => {setCount(count + 1)}}>
          Count
        </button>
        <p>{data}</p>
        <p>cock and ball:{count}</p>
      </div>
    </div>
  );
}

export default Example;
