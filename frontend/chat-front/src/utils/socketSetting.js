import { io } from "socket.io-client";

export const socketSetting = () => {
  return io("https://simple-chatapp-nvr1.onrender.com/");
};
