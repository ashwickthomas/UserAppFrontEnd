import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function () {

    const {id} = useParams();

    const[user,setUser] = useState({

        name:" ",
        userName:" ",
        email:" "
    })

    useEffect(()=>{

       viewUserHandler()
    },[]);

    const viewUserHandler = async()=>
    {
        console.log("in viewuserhandler");
        fetch(`http://localhost:8080/Users/getuser/${id}`,{

        method:'GET',
        headers:{'Content-Type': 'application/json'},
     }).then(user=>user.json()).
         then(us=>setUser(us))

    }


  return (
    <div className="container" onLoad={viewUserHandler}>
    <div className="row"></div>
    <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className='text-center m-4'>User Details</h2>

        <div className='card'>
            <div className='card-header'>
                Details of user id:{id}

                <ul className='list-group list-group-flush'></ul>
                <li className='list-group-item'>
                    <b>Name:{user.name}</b>
                </li>

                <li className='list-group-item'>
                    <b>UserName:{user.userName}</b>
                </li>

                <li className='list-group-item'>
                    <b>Email:{user.email}</b>
                </li>
            </div>

        </div>
        <Link to="/">
        <button className='btn btn-primary mt-6' style={{margin:"8px"}}>Home</button>
        </Link>

        </div>
       
        </div>
  )
}
