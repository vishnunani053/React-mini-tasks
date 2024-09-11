import React, { useState } from "react";

const EmailForm = () => {
  const [emails, setEmails] = useState([""]);
  const handleAdd = () => {
    setEmails([...emails, ""]);
  };
  //   const handleRemove = () => {
  //     setEmails(emails.slice(0, -1));
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("emails submitted", emails);
  };

  const handleRemove = (index) => {
    const updateEmails = emails.filter((_, i) => i !== index);
    setEmails(updateEmails);
  };

  const handleInputChange = (index, e) => {
    const updateEmails = [...emails];
    updateEmails[index] = e.target.value;
    setEmails(updateEmails);
  };
  return (
    <div className="mt-5 px-5">
      <form onSubmit={handleSubmit}>
        {emails.map((it, index) => (
          <div key={index} className="mb-2">
            <input
              type="email"
              value={it}
              onChange={(e) => handleInputChange(index, e)}
            />
            <button type="button" onClick={() => handleRemove(index)}>
              Remove
            </button>
          </div>
        ))}

        <div className="mt-3">
          <button type="button" onClick={handleAdd}>
            Add Email
          </button>{" "}
          &nbsp;
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EmailForm;
