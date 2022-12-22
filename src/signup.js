import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

function Signup(){
  const [inputValue, setInputValue] = useState("");
    
  const preInputValue = useRef("");
  useEffect(() =>{
    console.log("Updated")
    
  }, [inputValue]);

  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  const focus =()=>
  {
    preInputValue.current.focus();
  }

    return(
<div>
<section className="">
 
  <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{backgroundColor: "teal", borderShadow:"green"}}>
    <div className="container">
      <div className="row gx-lg-5 align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <h1 style={{color:"purple"}} className="my-5 display-3 fw-bold ls-tight">
            Welcome To <br />
            <span style={{color:"green"}}>Go Green</span>
          </h1> 
        </div>

        <div className="col-lg-6 mb-5 mb-lg-0">
          <div className="card">
            <div className="card-body py-5 px-md-5">
              <form onSubmit={handleSubmit}>
                
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input ref={preInputValue} className="text" id="form3Example1" class="form-control" onChange={(e => setInputValue(e.target.value))}/>
                      <label className="form-label" for="form3Example1" onClick={focus}  >First name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example2" class="form-control" />
                      <label className="form-label" for="form3Example2">Last name</label>
                    </div>
                  </div>
                </div>

                
                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3" class="form-control" />
                  <label className="form-label" for="form3Example3">Email address</label>
                </div>

                
                <div class="form-outline mb-4">
                  <input type="password" id="form3Example4" class="form-control" />
                  <label class="form-label" for="form3Example4">Password</label>
                </div>

                <Link to="/login"><button type="submit" style={{borderRadius: "2rem"}} class="btn btn-primary btn-block mb-4">
                  Sign up
                </button></Link>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
</section>
<div>
{/* {inputValue}
{preInputValue.current} */}
</div>
</div>
    );
}
export default Signup;