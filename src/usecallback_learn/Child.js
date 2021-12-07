import { useEffect } from "react";

function Child({returnComment}) {
    useEffect(() => {
        console.log("Function was called");
      },[returnComment]); 

      return (
          <div>
              {returnComment(",Marky")}
          </div>
      )
}

export default Child;