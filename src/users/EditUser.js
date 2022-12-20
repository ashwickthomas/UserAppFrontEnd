import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';

export default function EditUser(props) {

    const[updateUser,setUpdateUser] = useState({

        "name" : '',
        "userName":'',
        "email":''
})

let { id } = useParams();


 const inputChangeHandler =(e)=>{

    const state = updateUser;
    state[e.target.name] = e.target.value;
    setUpdateUser({...state})

 }

 const handleClick =(e)=>
 {
 e.preventDefault();

 //console.log(id);
    
      fetch(`http://localhost:8080/Users/user/${id}`,{

         method:'PUT',
         headers:{'Content-Type': 'application/json'},
         body:JSON.stringify(updateUser)
        // body: updateUser
      }).then((user)=>{
        user.json().then( a => {console.log(a);setUpdateUser(a)})
        //setUpdateUser(user);
        console.log("user: ",updateUser)
      }
      )
}

  return (
    <div className="container" >
        <div className="row"></div>
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className='text-center m-4'>Edit User</h2>
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