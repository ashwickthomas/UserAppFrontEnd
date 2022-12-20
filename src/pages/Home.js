import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import Bar from '../layout/bar'
import { Link } from 'react-router-dom';

export default function Home(props) {
   const[users,setUsers] = useState([]);

    useEffect(()=>{
        loadUsers();
      },[]);

const loadUsers= async ()=>{

  const result = await fetch("http://localhost:8080/Users/getUsers").
    then(respone=>respone.json()).
    then(user=>setUsers(user))  
    }

    const deleteHandler = async(id)=>{

      fetch(`http://localhost:8080/Users/deleteuser/${id}`,{
          method:"DELETE"
      }).
      then(()=>{

        loadUsers()
        console.log('deleted')});

    }

  return (

    <div className='container'>
      <Bar/>
       <div className='py-4'>
       <table class="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">UserName</th>
      <th scope="col">Email</th>
      <th scope='col'>Action</th>
    </tr>
  </thead>
  <tbody>
    {
      users.map((user,index)=>(
      <tr> 
      <th scope='row' key={index}>{index+1}</th> 
      <td>{user.name}</td> 
      <td>{user.userName}</td> 
      <td>{user.email}</td> 
      <td>
        <Link to={`/viewuser/${user.id}`}>
        <button className='btn btn-primary mx-2'>View</button>
        </Link>
        <Link to={`/edituser/${user.id}`}>
        <button className='btn btn-primary mx-2'>Edit</button>
        </Link>
        <button className='btn btn-danger mx-2' onClick={(e)=>deleteHandler(user.id)}>Delete</button>
      </td>
    </tr>

      ))
    }
    
  </tbody>
</table>
    </div>
    </div>
  )
}
