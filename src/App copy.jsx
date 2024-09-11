import React from 'react'
// import ParentComponent from './usecallback/ParentComponent'
// import SetTimeoutCounter from './useEffect/SetTimeoutCounter'
// import SetIntervalCounter from './useEffect/SetIntervalCounter'
// import UseStateHook from './useState/UseStateHook'
// import EmailForm from './dynamicForm/EmailForm'
// import UserData from './Forms/UserData'
// import ParentComponent from './usecallback/ParentComponent'
// import GetData from './datafetch/GetData'
// import AddUser from './crud/CreateUser'
// import GetUser from './crud-apps/GetUser'
// import UseRefHook from './useRef/UseRefHook'
import UseMemoHook from './useMemo/UseMemoHook';


const App = () => {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      {/* <AddUser/> */}
      {/* <GetUser/> */}
      {/* <UseRefHook/> */}
      {/* <ParentComponent/> */}
      {/* <GetData/> */}
      {/* <EmailForm/> */}
      {/* <UserData/> */}
      {/* <UseStateHook/> */}
      {/* <SetTimeoutCounter/> */}
      {/* <SetIntervalCounter/> */}
      {/* <ParentComponent/> */}
      {/* // export default function App() { */}
     <UseMemoHook numbers={numbers} />;

    </div>
  )
}

export default App