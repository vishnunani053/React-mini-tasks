import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';

const GetUser = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://dummyjson.com/users");
                if (!response.ok) {
                    throw new Error("Failed to fetch");
                }
                console.log("users",users)
                const data = await response.json();
                setUsers(data.users); // Accessing the 'users' property from the API response
            } catch (error) {
                console.log(error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default GetUser;
