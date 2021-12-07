import React, { useState, useEffect, useMemo} from 'react';
import axios from 'axios';


function Example() {

  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false)

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments")
    .then((response) =>{
        // console.log(response.data);
        setData(response.data);
    })
  },[]);  

  const findLongestName = (comments) => {
    if(!comments) return null;

    let longestName = "";
    for (let i = 0 ; i < comments.length; i++){
        let currentName = comments[i].name;
        if(currentName.length > longestName.length){
          longestName = currentName;
        }
    }
    console.log("This was computed.");
    return longestName;
  }

  const getLongestName = useMemo(() => findLongestName(data), [data]);

  return (
    <div className="row"> 
      <div className="col-12 text-center my-1">
        {/* {findLongestName(data)} */}
        {getLongestName}
      </div>

      <div className="col-12 text-center my-1">
          <button onClick={() => setToggle(!toggle)}>Toggle</button>
      </div>

      <div className="col-12 text-center my-1">
          {toggle && <h1>Toggle</h1>}
      </div>


    </div>
  );
}

export default Example;
