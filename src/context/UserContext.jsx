// import React, { createContext } from 'react'

// export const UserContext = createContext()

// export const ContextProvider = ({ children }) => {

//    return (
//     <UserContext.Provider value={'hello'}>
//         <div>{children}</div>
//     </UserContext.Provider>
//    )
   
// }


import React, { createContext } from "react";
 
export const UserContext = createContext();
const userData=[
    {
        name:"John Doe",
        salary:65000,
        email:'user@gmail.com'
    },{
        name:"nani Doe",
        salary:45000,
        email:'user@gmail.com'
    },{
        name:"heroo Doe",
        salary:55000,
        email:'user@gmail.com'
    }
]

export const UserContextProvider = ({children})=>{
    return <UserContext.Provider value={userData}>
        <div>{children}</div>
    </UserContext.Provider>
}



