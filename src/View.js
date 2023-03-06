import React, { useState } from 'react'
import { useEffect } from 'react';

function View() {
    const[signup,setSignup] = useState();
    useEffect(()=>{
        fetch('http://localhost:5000/details').then((res)=>{
            return res.json();

        }).then((data)=>{
            setSignup(data);
        })
    })

  return (
    <>

    <div className="container">
        <div className='back'>
        <div className="row">
            <div className="col view">
                <h1>welcome</h1>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>
                                name
                            </th>
                            <th>
                                email
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            
                            signup && signup.map((Signup)=>{
                                return(
                                    
                                    <tr>
                                        <td className='text-white'>{Signup.username}</td>
                                        <td className='text-white'>{Signup.email}</td>
                                    </tr>
                                )
                            })

                        }
                    </tbody>
                </table>
            </div>
        </div>
        </div>

    </div>
    </>
      
    
  );
}

export default View;
