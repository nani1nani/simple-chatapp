import { io } from "socket.io-client";

export const socketSetting = () => {
  return io("http://localhost:5000/");
};
