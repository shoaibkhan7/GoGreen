import { useState,createContext } from "react";
import Child1 from "./child";
export const Globalinfo=createContext();
function Context() {
    const[color,setColor]=useState("Purple");
    const[day,setDay]=useState("Wedneday");
    const getDay = (item) => {
        setDay(item);
    }
     
    
    return (
    <Globalinfo.Provider value={{appColor:color,Day:getDay}}>
    <div>
        <h1>hello world it is {day}</h1>
        <Child1/>
        
    </div> 
    </Globalinfo.Provider> );
}

export default Context;