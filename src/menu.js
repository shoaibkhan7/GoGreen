import { Link } from "react-router-dom";


function Menu(){
    return (
         <div>
            <nav style={{position:"fixed",top:"",bottom:""}}  className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid"style={{backgroundColor:"",marginRight:"140px"}}>
    <a className="navbar-brand" style={{fontFamily:"tahoma",marginLeft:"10px",fontSize:"27px",color:"darkGreen"}} href="#">GO GREEN</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
        <li className="nav-item">
          <button className="nav-link active btn btn-light"style={{marginLeft:"80px",fontFamily:"tahoma"}} aria-current="page" href="#">Home</button>
        </li>
        <li className="nav-item">
          <Link to="/about" style={{textDecoration:"none"}}><button className="nav-link active btn btn-light"style={{marginLeft:"30px"}} href="#">About</button></Link>
        </li>
        <li className="nav-item">
          <Link to="/plantscaping" style={{textDecoration:"none"}}><button className="nav-link active btn btn-light"style={{marginLeft:"30px",fontFamily:"tahoma"}} href="#">Plants</button></Link>
        </li>
         {/* <li className="nav-item dropdown">
           <a className="nav-link dropdown-toggle active"style={{marginLeft:"30px",fontFamily:"tahoma",fontSize:"22px"}} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Page
          </a> 
           <ul className="dropdown-menu">
            <li><a className="dropdown-item"style={{marginLeft:"30px",fontFamily:"tahoma",fontSize:"22px"}} href="#">Action</a></li>
            <li><a className="dropdown-item"style={{marginLeft:"30px",fontFamily:"tahoma",fontSize:"22px"}} href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul> 
        </li>  */}
        <li className="nav-item">
         <Link to="/Signup"> <button  style={{marginLeft:"50px",fontFamily:"tahoma"}} className="btn btn-light"  href="#">Signup</button>
         </Link> </li>
        <li className="nav-item">
        <Link to="/login"  style={{borderRadius:10}}><button className="btn btn-light"style={{marginLeft:"30px",fontFamily:"tahoma"}} href="#">LogIn</button></Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input style={{marginLeft:92}} className="form-control me-1" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form>
      
    </div>

  </div>
  </nav>
        
        <img src="pic5.jpg" className="d-block w-100" alt="..."/>
        <h3 style={{textAlign:"center",marginTop:"20px",borderStyle: "solid"}}>Latest Offers & Deals</h3>
        <div style={{magrinTop:"20px"}} class="card-group">
  <div class="card">
    <img class="card-img-top" src="pic6.png" alt="Card image cap"/>
    <div class="card-body">
      <h4 class="card-title">Red Bush</h4>
      <p class="card-text"> It is a broom-like member of the plant family Fabaceae that grows in South Africa's fynbos biome.</p>
      <h5 style={{color:"darkGreen",textAlign:"center"}}>Rs. 200</h5>
      <button className="btn btn-success" style={{marginLeft:166}}>Buy</button>

      
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="pic7.png" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Poison bulb crinum</h5>
      <p class="card-text">poison bulb is a plant species widely planted in many warmer regions as an ornamental.</p>
      <h5 style={{color:"darkGreen",textAlign:"center"}}>Rs. 400</h5>
      <button className="btn btn-success" style={{marginLeft:166,magrinBottom:20}}>Buy</button>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="pic8.png" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Banafsha Viola</h5>
      <p class="card-text">Banafsha is a medicinal herb, has a long and proven history in the treatment of whooping cough, cold and flu.</p>
      <h5 style={{color:"darkGreen",textAlign:"center"}}>Rs. 500</h5>
      <button className="btn btn-success" style={{marginLeft:166}}>Buy</button>
    </div>
    </div>
 </div>
 <br></br>
  <h3 style={{textAlign:"center",marginTop:"20px",borderStyle: "solid" }}>PALM PLANTS COLLECTION IN PAKISTAN</h3>
  <div class="card-group">
  <div class="card">
    <img class="card-img-top" src="pic9.png" alt="Card image cap"/>
    <div class="card-body">
      <h4 class="card-title">Yucca Palm </h4>
      <p class="card-text">Yucca is a genus of perennial shrubs and trees in the family Asparagaceae.</p>
      <h5 style={{color:"darkGreen",textAlign:"center"}}>Rs. 2000</h5>
      <button className="btn btn-success" style={{marginLeft:166}}>Buy</button>

      
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="pic10.png" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Hyophorbe verschaffeltii</h5>
      <p class="card-text">The spindle palm is 6 metres (20 ft) tall, and have lightly recurved pinnate leaves.They are elegant looking and are prized for landscape in the tropical and semi-tropical areas of the world.</p>
      <h5 style={{color:"darkGreen",textAlign:"center"}}>Rs. 5,250</h5>
      <button className="btn btn-success" style={{marginLeft:166}}>Buy</button>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="pic11.png" alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Fishtail Palm</h5>
      <p class="card-text">Caryota is a genus of palm trees. They are often known as fishtail palms because of the shape of their leaves. There are about 13 species native to Asia, northern Australia, and the South Pacific.</p>
      <h5 style={{color:"darkGreen",textAlign:"center"}}>Rs. 3,500</h5>
      <button className="btn btn-success" style={{marginLeft:166}}>Buy</button>
    </div>
    </div>
    </div>
    <h3 style={{marginTop:30,borderStyle: "solid"}}>All Pakistan Delivery:</h3>
    <div style={{width:980,marginLeft:130}}><p>Shop with Plantsuniverse in Pakistan bringing a reliable, hassle-free and convenient shopping experience to your fingertips. Founded on the precipice of trust and peace of mind, Plantsuniverse aims to provide an unfailing and absolutely trouble-free shopping experience to the people of Pakistan. Online shopping in Pakistan has seen a significant boom in the mainstream over the last few years. No matter where you live in Pakistan, we will deliver your order anywhere you are, within 3 to 7 working days of your order placement. Every Plant on Plantsuniverse is just a few clicks away. You just have to add your desired product to your cart, tell us your destination, and place the order. We'll take care of the rest. Everything you need will reach you at your doorstep with the added luxury of cash on delivery. Customer satisfaction, trust, transparency, and commitment are the terms that define us and we work day and night to make your online shopping experience easier and free of all worries.</p>
    </div>
    <h4 style={{marginLeft:"100px"}}>Terms & Condition</h4>
    <p style={{width:"1000px",marginLeft:"100px"}}>Welcome to our website. If you continue to browse and use this website you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Go Green's relationship with you in relation to this website.<br></br><br></br>

The term 'Go Green' or 'us' or 'we' refers to the owner of the websit. The term 'you' refers to the user or viewer of our website.<br></br><br></br>

The use of this website is subject to the following terms of use:<br></br><br></br>

The content of the pages of this website is for your general information and use only. It is subject to change without notice.<br></br><br></br>

Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.<br></br><br></br>

Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.<br></br><br></br>

This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.<br></br><br></br>

All trademarks reproduced in this website which is not the property of, or licensed to, the operator is acknowledged on the website.<br></br><br></br>

Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offense.<br></br><br></br>

From time to time this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).<br></br><br></br>

You may not create a link to this website from another website or document without Plants Universe's prior written consent.<br></br><br></br>

Your use of this website and any dispute arising out of such use of the website is subject to the laws of India or other regulatory authority.</p>

      <div>
        <footer></footer>
      </div>
    </div>
 
 
        
          
     
        

    );
}
export default Menu;