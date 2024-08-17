import React, { useState } from 'react';

function EmailForm() {
    const [emails, setEmails] = useState(['']);

    const handleInputChange = (index, event) => {
        const updatedEmails = [...emails];
        updatedEmails[index] = event.target.value;
        setEmails(updatedEmails);
    };

    const handleAddEmailField = () => {
        setEmails([...emails, '']);
    };

    const handleRemoveEmailField = (index) => {
        const updatedEmails = emails.filter((_, i) => i !== index);
        setEmails(updatedEmails);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted Emails:', emails);
    };

    return (
        <form onSubmit={handleSubmit}>
            {emails.map((email, index) => (
                <div key={index} style={{ marginBottom: '10px' }}>
                    <input
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(event) => handleInputChange(index, event)}
                        required
                        style={{ marginRight: '10px' }}
                    />
                    <button type="button" onClick={() => handleRemoveEmailField(index)}>
                        Remove
                    </button>
                </div>
            ))}
            <button type="button" onClick={handleAddEmailField}>
                Add Email
            </button>
            <button type="submit">Submit</button>
        </form>
    );
}

export default EmailForm;
