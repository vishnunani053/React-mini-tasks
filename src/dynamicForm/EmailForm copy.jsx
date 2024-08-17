import React, { useState } from 'react';

function EmailForm() {
    const [emails, setEmails] = useState([{ email: '' }]);

    const handleInputChange = (index, event) => {
        const values = [...emails];
        values[index].email = event.target.value;
        setEmails(values);
    };

    const handleAddFields = () => {
        setEmails([...emails, { email: '' }]);
    };

    const handleRemoveFields = (index) => {
        const values = [...emails];
        values.splice(index, 1);
        setEmails(values);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Emails submitted:', emails);
    };

    return (
        <form onSubmit={handleSubmit} className='mt-5 px-5'>
            {emails.map((emailField, index) => (
                <div key={index}>
                    <input
                        type="email"
                        placeholder="Enter email"
                        value={emailField.email}
                        onChange={(event) => handleInputChange(index, event)}
                        required
                    />
                    <button type="button" onClick={() => handleRemoveFields(index)}>Remove</button>
                </div>
            ))}
            <button type="button" onClick={handleAddFields}>Add Email</button>
            <button type="submit">Submit</button>
        </form>
    );
}

export default EmailForm;
