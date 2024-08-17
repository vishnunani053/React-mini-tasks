import React from 'react'

const api_url =  "http://localhost:8000/create";

const CreateUser = () => {
//   const handleSubmit=async(e)=>{
//     e.preventDefault();
//     const data = new FormData(e.currentTarget)
//     const payload={
//       name:data.get("name"),
//       email:data.get("email"),
//       mobile:data.get("mobile"),
//       salary:data.get("salary")
//     }
// try {
//   const response = await fetch(api_url,{
//     method:"POST",
//     body:JSON.stringify(payload),
//     headers:{
//       'Content-Type': 'application/json',
//     }
//   })
//   if (!response.ok) {
//     throw new Error("response error")
    
//   }
//   const result = await response.json()
//   if (result) {
//     console.log("responseData", result);
//     e.target.reset();
//   }
  
//   console.log("data added successfully!!");
// } catch (error) {
//   console.log('Error:', error);
// }
//   }

const handleSubmit = async(e)=>{
e.preventDefault();
const data = new FormData(e.currentTarget)
const payload ={
  name:data.get("name"),
  email:data.get("email"),
  mobile:data.get("mobile"),
  salary:data.get("salary")
}
try {
  const response = await fetch(api_url,{
    method:"POST",
    headers:{
      "Content-Type":"Application/json"
    },
    body:JSON.stringify(payload)
  })
  if (!response.ok) {
    throw new Error("network response not okay")
    
  }
  const result = await response.json()
  if (result) {
    e.target.reset()
  }
} catch (error) {
  console.log(error,"failed to submit")
}
}
  return (
    <div className='mt-5 p-5' >
        <form onSubmit={handleSubmit}>
            <input type="text"  name='name' placeholder='name'/><br /> <br />
            <input type="text"  name='email' placeholder='email'/><br /> <br />
            <input type="text"  name='mobile' placeholder='mobile'/><br /> <br />
            <input type="text"  name='salary' placeholder='salary'/><br /> <br />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default CreateUser