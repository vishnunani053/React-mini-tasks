import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import usersData from './users.json'

const GetUser = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // const fetchUsers = async () => {
        //     try {
        //         // Fetching data from local JSON file
        //         const response = await fetch(usersData);
        //         if (!response.ok) {
        //             throw new Error("Failed to fetch");
        //         }
        //         const data = await response.json();
                setUsers(usersData.users); // Accessing the 'users' property from the JSON file
        //     } catch (error) {
        //         console.log(error);
        //     }
        // };
        // fetchUsers();
    }, []);

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.username}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default GetUser;
