import { useContext} from "react";
import {Globalinfo} from "./usecontext";
function Super() {
    const{appColor,Day}=useContext(Globalinfo);
    const day = "Sunday";
    return (
        <div>
<h2 style={{color:appColor}}> super Child component</h2>
<button className="btn btn-primary" onClick={()=>Day(day)}>Click</button>
        </div>
      );}

export default Super;