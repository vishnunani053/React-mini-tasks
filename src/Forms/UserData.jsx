import React, { useState } from 'react'

const UserData = () => {
    const[formData,setFormData]=useState({
        name:"",
        email:"",
        contact:"",
    })
   const [submitted,setSubmitted]=useState([])
    const handleChange =(e)=>{
      const {name,value}=e.target;
      setFormData({...formData,[name]:value})
    }
    const handleSubmit =(e)=>{
      e.preventDefault()
      const newData={...formData}
      setSubmitted([...submitted,newData])
      setFormData({ name: '', email: '', contact: '' })


    }
    const handelremove =(index)=>{
      setSubmitted(submitted.filter((_,i)=>i!==index))
    }
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter name"
        name="name"
        onChange={handleChange}
        value={formData.name}
      />
      <input
        type="text"
        placeholder="Enter email"
        name="email"
        onChange={handleChange}
        value={formData.email}
      />
      <input
        type="text"
        placeholder="Enter contact"
        name="contact"
        onChange={handleChange}
        value={formData.contact}
      />
      <button type="submit">Submit</button>
    </form>
    <div>
      {
        submitted.map((data,index)=>(
 <ul key={index}>
  <h4>{index+1}</h4>
  <li>{data.name}</li>
  <li>{data.email}</li>
  <li>{data.contact}</li>
  <button onClick={()=>handelremove(index)}>delete</button>
 </ul>
        ))
      }
    </div>

  </div>
  )
}

export default UserData