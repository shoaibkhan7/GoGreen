import { useState,useContext} from "react";
import Super from "./superChild";
import {Globalinfo} from "./useContext";
function Child1() {
    const{appColor}=useContext(Globalinfo);
    return (
        <div>
<h2 style={{color:appColor}}>Child component</h2>
<Super/>
        </div>
      );
}

export default Child1;