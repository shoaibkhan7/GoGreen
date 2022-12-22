
   import { Routes,Route } from "react-router-dom";
   //import { Route, Router, Routes } from "react-router-dom";
   import Menu from "./menu.js";
   import Login from "./login.js";
   import Signup from "./signup.js";
   import About from "./about.js";
   import Plantscaping from "./plantscaping.js";
   
 
  



 
function App(){

    
    return(
     <div>
       
     


       {/* <Signup/>  */}
     
          
     
     
        <Routes>
          
          <Route path="/" element={<Menu/>}/>  
          <Route path="/login" element={<Login/>}/> 
          < Route path="Signup" element={<Signup/>}/> 
          < Route path="about" element={<About/>}/>
          < Route path="plantscaping" element={<Plantscaping/>}/> 
          <Route path="/" element = {<Menu/>}/>
          


          </Routes>  
      
           
           
               
          
      </div>
      
     
    );
};
export default App;