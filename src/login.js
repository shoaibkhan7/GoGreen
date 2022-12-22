import { createContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const email = createContext("null");
function Login(){
  const navigate=useNavigate()
  function gotohome()
  {
    navigate("/")
  }
  
    return(
     
     <div>
 <form>       
<section className="vh-100" style={{backgroundColor:"teal"}}>
  <div className="container py-8 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card shadow-2-strong" style={{borderRadius: "5rem"}}>
          <div className="card-body p-5 text-center">

            <h3 className="mb-5">Sign in</h3>

            <div className="form-outline mb-4">
              <input type="email" id="typeEmailX-2" className="form-control form-control-lg" />
              <label className="form-label" for="typeEmailX-2">Email</label>
            </div>

            <div className="form-outline mb-4">
              <input type="password" id="typePasswordX-2" className="form-control form-control-lg" />
              <label className="form-label" for="typePasswordX-2">Password</label>
            </div>

            
            <div className="form-check d-flex justify-content-start mb-4">
              <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
              <label className="form-check-label" for="form1Example3"> Remember password </label>
            </div>

            <button  style={{borderRadius:60}} className="btn btn-primary btn-lg btn-block" type="submit" onClick={gotohome}>Login</button>

            <hr class="my-4"/>
         </div>
        </div>
      </div>
    </div>
  </div>
</section>
</form>
     
     </div>
    );
}
export default Login;