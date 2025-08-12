import React, { useState, useEffect, useContext } from "react";
import { socketSetting } from "../utils/socketSetting";
import Mycontext from "../utils/context";

const Chat = () => {
  const { username, userId, receiverId } = useContext(Mycontext);
  const [message, setMessage] = useState("");
  const [msgs, setmsgs] = useState([]);
  const time = new Date(Date.now());

  const input = (e) => {
    setMessage(e.target.value);
  };
  const chatbutton = () => {
    const socket = socketSetting();
    socket.emit("sendMessage", {
      username,
      message,
      userId,
      receiverId,
      Date: time.toLocaleString("en-us", {
        dateStyle: "medium",
        timeStyle: "short",
      }),
    });
  };

  useEffect(() => {
    const socket = socketSetting();

    socket.emit("joinChat", { username, userId, receiverId });
    socket.on(
      "servermsg",
      ({ username, message, userId, receiverId, Date }) => {
        setmsgs((data) => [
          ...data,
          { username, message, userId, receiverId, Date },
        ]);
      }
    );

    return () => socket.disconnect();
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <header className="bg-blue-600 text-white p-4 text-lg font-semibold shadow">
        Chat App
      </header>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {msgs.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.username === username ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-2xl text-sm shadow 
              ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white rounded-br-none"
                  : "bg-gray-200 text-gray-800 rounded-bl-none"
              }`}
            >
              <div
                className={
                  msg.userId !== msg.receiverId
                    ? "flex-col justify-end"
                    : "justify-items-center"
                }
              >
                <h1 className="font-bold">
                  {msg.username}
                  <span className="mx-1">{msg.Date}</span>
                </h1>
                <span>{msg.message}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-3 border-t border-gray-300 flex items-center gap-2 bg-white">
        <textarea
          rows="1"
          className="flex-1 resize-none rounded-xl border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Type your message..."
          value={message}
          onChange={input}
          // onKeyDown={handleKeyDown}
        />
        <button
          onClick={chatbutton}
          className="bg-blue-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};
export default Chat;
