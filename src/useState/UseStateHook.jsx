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
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setSubmittedData([...submittedData, formData]);
  //   setFormData({
  //     name: "",
  //     email: "",
  //     contact: "",
  //     salary: "",
  //   });
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmittedData([...submittedData, formData]);
    setFormData({
      name: "",
      email: "",
      contact: "",
      salary: "",
    });
  };
  const handleDelete = (index) => {
    const deleteData = submittedData.filter((_, i) => i !== index);
    setSubmittedData(deleteData);
  };

  return (
    <div className="px-5 py-5">
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
        <table border={2}>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Salary</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {submittedData.map((data, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.contact}</td>
                <td>{data.salary}</td>
                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UseStateHook;
