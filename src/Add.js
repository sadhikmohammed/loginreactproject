import React, { useState } from 'react'
import { Link } from 'react-router-dom';


function Add(){

  const[username,setUsername]=useState();
  const[email,setEmail] = useState();
  const[password,setPassword] = useState();
  // const[confirmpassword,setConfirmpassword] = useState();
  const Add = (e) =>{
    e.preventDefault();
    const data ={username,email,password}
    fetch('http://localhost:5000/details',{
      method:'POST',
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(data)
    }).then(()=>{
      alert('sign up confirm');

    });
  }
  





  return (
    <>
    
    <div className='bg'>
       <div className="addform"> 
       <div className="signupform">
          <form onSubmit={Add}>
            <div className='sign'>
              <h1>Signup here</h1>
            </div>
            <div>
              <h5>user name</h5>

            <input type="text" placeholder="user name" onChange={(e)=>setUsername(e.target.value)} />
            </div>
            <div>
              <h5>E-Mail</h5>
            <input type="text" placeholder="e-mail" onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div>
              <h5>Create password</h5>
            <input type="password" placeholder="Create password" onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <div>
              <h5>Confirm password</h5>
            <input type="password" name="" id="" placeholder="confirm password"  />
            </div>

            <button className='btn'>Signup</button>
          </form>
          <p>Already have accout??<Link to="/login">Login</Link></p>

        </div>
      </div>
    </div>
    </>
  )
}

export default Add;
