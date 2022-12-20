import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function AddUser() {

    const[registeredUser,setRegisteredUser] = useState({

        "name" : '',
        "userName":'',
        "email":''
})

 const inputChangeHandler =(e)=>{

    const state = registeredUser;
    state[e.target.name] = e.target.value;
    setRegisteredUser({...state})

 }

 const handleClick =(e)=>
 {
 e.preventDefault();

 console.log(registeredUser);
    
      fetch("http://localhost:8080/Users/AddUser",{

         method:'POST',
         headers:{"Content-type":"application/json"},
         body:JSON.stringify(registeredUser)
      }).then(()=>{
        console.log("User added");
      }
      )
}

  return (
    <div className="container" >
        <div className="row"></div>
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className='text-center m-4'> User</h2>
            <div className='mb-3'>
                <label htmlFor='name' className='form-label'>
                   <b>Name</b>
                </label>
                <input type='text' className='form-control' placeholder='Enter your Name' name='name' onInput={inputChangeHandler}></input>
            </div>
            <div className='mb-3'>
                <label htmlFor='userName' className='form-label'>
                  <b> UserName</b>
                </label>
                <input type='text' className='form-control' placeholder='Enter your Username ' name='userName' onInput={inputChangeHandler}></input>
            </div>
            <div className='mb-3'>
                <label htmlFor='email' className='form-label'>
                   <b> Email</b>
                </label>
                <input type='text' className='form-control' placeholder='Enter your Email' name='email' onInput={inputChangeHandler}></input>
            </div>
            <button type='button' className='btn btn-outline-primary' onClick={handleClick}>Submit</button>
            <Link to="/">
            <button type='button' className='btn mx-3 btn-outline-primary'>Cancel</button>
            </Link>
        </div>
    </div>
  )
}
