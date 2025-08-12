// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = ({ value }) => {
//   //   console.log("this is from value ", value);
//   const [name, setName] = useState("");
//   const [id, setId] = useState("");
//   const [friendId, setFriend] = useState("");
//   const navigate = useNavigate();

//   const username = (e) => {
//     setName(e.target.value);
//   };
//   const userid = (e) => {
//     setId(e.target.value);
//   };
//   const receiverId = (e) => {
//     setFriend(e.target.value);
//   };
//   const openChat = (e) => {
//     e.preventDefault();
//     value(name, id, friendId);
//     navigate("/chat");
//   };
//   return (
//     <div>
//       <form onSubmit={openChat}>
//         <label>userName</label>
//         <input type="text" placeholder="enter userName" onChange={username} />
//         <input type="text" placeholder="enter your id" onChange={userid} />
//         <input type="text" placeholder="enter your id" onChange={receiverId} />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ value }) => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [friendId, setFriend] = useState("");
  const navigate = useNavigate();

  const username = (e) => setName(e.target.value);
  const userid = (e) => setId(e.target.value);
  const receiverId = (e) => setFriend(e.target.value);

  const openChat = (e) => {
    e.preventDefault();
    value(name, id, friendId);
    navigate("/chat");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200">
      <form
        onSubmit={openChat}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-indigo-600">
          Login to Chat
        </h2>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-600">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter username"
            onChange={username}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 border-gray-300"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-600">
            Your ID
          </label>
          <input
            type="text"
            placeholder="Enter your ID"
            onChange={userid}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 border-gray-300"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-600">
            Friend's ID
          </label>
          <input
            type="text"
            placeholder="Enter friend's ID"
            onChange={receiverId}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 border-gray-300"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 rounded-lg shadow hover:opacity-90 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

// export default Login;

export default Login;
