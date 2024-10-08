import React, { useState } from "react";

const EmailForm = () => {
  const [emails, setEmails] = useState([""]);

  const handleAdd = () => {
    setEmails([...emails, ""]);
  };

  const handleRemove = (index) => {
    const updateEmails = emails.filter((_, i) => i !== index);
    setEmails(updateEmails);
  };
  const handleChange=(index,e)=>{
    const updateEmails =[...emails];
    updateEmails[index]=e.target.value;
    setEmails(updateEmails)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("submitted",emails)
    
  }
  return (
    <div className="px-5 pt-5">
      <form onSubmit={handleSubmit}>
        {emails.map((it, index) => (
          <div key={index} className="mb-3">
            <input type="text" value={it} onChange={(e)=>handleChange(index,e)} />
            <button type="button" onClick={() => handleRemove(index)}>
              Remove
            </button>
          </div>
        ))}
        <div className="mt-5">
          <button type="button" onClick={handleAdd}>
            Add email
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EmailForm;
