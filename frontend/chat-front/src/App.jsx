import React, { useState } from "react";
import Chat from "./components/Chat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";

import Mycontext from "./utils/context";
const App = () => {
  const [userData, setData] = useState({
    username: "",
    userId: "",
    receiverId: "",
  });
  const loginDetails = (userName, id, receiverId) => {
    setData({
      username: userName,
      userId: id,
      receiverId: receiverId,
    });
  };
  return (
    <div>
      <Mycontext.Provider value={userData}>
        <Router>
          <Routes>
            <Route path="/" element={<Login value={loginDetails} />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </Router>
      </Mycontext.Provider>
      {/* <Chat /> */}
    </div>
  );
};

export default App;
