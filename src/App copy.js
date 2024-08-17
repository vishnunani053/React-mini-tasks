import React from 'react';
// import Card from './card/Card';
// import OTPGenerator from "./otp-random/OTPGenerator.jsx";
// import SnakeGame from './snakeGame/SnakeGame.jsx';
// import Download from './download-interval/Download.jsx';
// import OTPGenNewWay from './otp-random/OTPGenNewWay.jsx';
// import PromiseComponent from './promise/Promise';
// import ChatGpt from './open-AI/ChatGpt';
import UseStateHook from './useState/UseStateHook';
import Login from './login/Login';
// import FormData from './Forms/UserData'
// import Reverse from './reverse-string/Reverse'
// import Login from './Login'
// import ModalComponent from './model/ModalComponent'
import Counter from './useEffect/SetIntervalCounter'
import SetTimeoutCounter from './useEffect/SetTimeoutCounter'

const App = () => {
  return (
    <div>
      {/* <OTPGenerator /> */}
      {/* <SnakeGame/> */}
      {/* <Download/> */}
      {/* <OTPGenNewWay/> */}
      {/* <Card/> */}
      {/* <PromiseComponent/> */}
      {/* <ChatGpt/> */}
      {/* <UseStateHook/> */}
         {/* <FormData/> */}
   {/* <ModalComponent/> */}
   {/* <Login/> */}
   {/* <Reverse/> */}
   <Counter/>
   <SetTimeoutCounter/>
      <Login/>

    </div>
  );
};

export default App;