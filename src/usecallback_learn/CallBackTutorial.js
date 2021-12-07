import axios from "axios";
import { useCallback, useState } from "react";
import Child from "./Child";


export default function CallBackTutorial(){
    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState("Bruh Momento 2022");

    const returnComment = useCallback((name) => {
        return data + " "+ name;
    }, [data])

    return (
        <div className="row">   
        <div className="col-12 text-center my-1">
            <Child returnComment={returnComment} />
        </div>
        <div className="col-12 text-center my-1">
            <button onClick={() => {setToggle(!toggle)}}>
                    Toggle
            </button>
            {toggle && <h2>Toggle</h2>}
        </div>
      </div>
    )
}