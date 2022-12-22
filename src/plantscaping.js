import { Link } from "react-router-dom";

//import Menu from "./menu";
function Plantscaping() {
    return ( 
        <div>
            <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link to="/" style={{textDecoration:"none"}}><button type="button" class="btn btn-transparent"  style={{fontFamily:"tahoma",marginLeft:"10px",fontSize:"27px",color:"darkGreen"}} href="#">GO GREEN</button></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" style={{marginLeft:"80px",fontFamily:"tahoma",fontSize:"15px"}} href="#">Palm Tree</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" style={{marginLeft:"30px",fontSize:"15px",fontFamily:"tahoma"}} href="#">Indoor Plants</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" style={{marginLeft:"30px",fontSize:"15px",fontFamily:"tahoma"}} href="#">Fruit Plants</a>
      </li>
    </ul>
    
  </div>
</nav>
            </div>
          
            <div style={{backgroundColor:"green",height:"50px"}}>
                <h3 style={{color:"white",textAlign:"center"}}>Plantscaping In Pakistan</h3>
            </div>
            <h4 style={{marginLeft:"40px",marginTop:"30px"}}>Plantscaping In Pakistan</h4>
            <p style={{marginLeft:"40px"}}>Plants are mainly multicellular, predominantly photosynthetic eukaryotes of the kingdom Plantae. Historically, plants were treated as one of two kingdoms including all living things that were not animals, and all algae and fungi were treated as plants</p>
            <div style={{marginTop:"50px",height:"100px"}} class="card-group">
  <div class="card">
    <img style={{width:"400px"}}class="card-img-top" src="pic13.png" alt="Card image cap"/>
    <div style={{height:"2rem"}} class="card-body">
      <h5 class="card-title">Asparagus plant</h5>
      <h5 style={{color:"darkGreen",textAlign:"center"}}>Rs. 450</h5>
      <button className="btn btn-success" style={{marginLeft:166}}>Buy</button>
    </div>
  </div>
  <div class="card">
    <img style={{width:"400px"}} class="card-img-top" src="pic14.png" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Ficus species</h5>
      <h5 style={{color:"darkGreen",textAlign:"center"}}>Rs. 450</h5>
      <button className="btn btn-success" style={{marginLeft:166}}>Buy</button>
      
    </div>
  </div>
   <div class="card" >
    <img style={{width:"400px"}} class="card-img-top" src="pic15.png" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Iresine</h5>
      <h5 style={{color:"darkGreen",textAlign:"center"}}>Rs. 450</h5>
      <button className="btn btn-success" style={{marginLeft:166}}>Buy</button>
    </div>
  </div> 
  </div>
  
</div>

        
     );
}

export default Plantscaping;