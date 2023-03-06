import React, { useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();

    const [userdata, setUserdata] = useState();

    const [username, setUsername] = useState();

    const[password, setPassword] = useState();


const checklogin = async (e) =>{
    e.preventDefault();
// alert();
 
    const res = await fetch(`http://localhost:5000/details/?username=${username}&password=${password}`)
    const udata = await res.json();
    // setUserdata(udata);
    // setFetchedpassword(udata.password);
    // console.log(udata);
    if(udata!=""){
    udata.map((da)=>{
        // setFetchedpassword(da.password);
        // console.log(fetchPassword);
        const fetchedpassword = da.password;
        const fetchedusername = da.username;
        if(fetchedpassword!=""&&fetchedusername!=""){
            if(username==fetchedusername && password == fetchedpassword){
                // alert("Success");
                navigate("/view");
            }
            else{
                alert("Sorry");
            }
        }

    })

    
    }

    else{
        alert("No user found")
    }
}



    


    

  return (
    <>
    
    <div className='bg'>
       <div className="addform"> 
       <div className="signupform">
          <form onSubmit={checklogin}>
            <div className='sign'>
              <h1>Signup here</h1>
            </div>
            <div>
              <h5>user name</h5>

            <input type="text" placeholder="user name" onChange={(e)=>setUsername(e.target.value)} />
            </div>
            <div>
              <h5>Enter password</h5>
            <input type="password" name="" id="" placeholder="confirm password" onChange={(e)=>setPassword(e.target.value)} />
            </div>

            <button className='btn'>Login</button>
          </form>
          <p>No Account??<Link to="/signup">Signup</Link></p>

        </div>
      </div>
    </div>
    </>
  )
}

export default Login
