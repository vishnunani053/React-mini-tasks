import React, { useState } from "react";

const UseStateHook = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    salary: "",
  });

  const [submittedData, setSubmittedData] = useState([]);

  // const handleChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     setSubmittedData([...submittedData, formData]);
  //     setFormData({
  //         name: '',
  //         email: '',
  //         contact: '',
  //         salary: ''
  //     });
  // }

  // const handleChange =(e)=>{
  //     const {name,value}=e.target;
  //     setFormData({...formData,[name]:value})
  // }
  // const handleSubmit =(e)=>{
  //     e.preventDefault();
  //     setSubmittedData([...submittedData,formData])
  //     setFormData({
  //         name:'',
  //         email:"",
  //         contact:"",
  //         salary:""
  //     })
  // }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);
    setFormData({
      name: "",
      email: "",
      contact: "",
      salary: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          name="contact"
          placeholder="Contact"
          value={formData.contact}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          name="salary"
          placeholder="Salary"
          value={formData.salary}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>

      <div>
        <h2>Submitted Data</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {submittedData.map((data, index) => (
              <tr key={index}>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.contact}</td>
                <td>{data.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UseStateHook;
