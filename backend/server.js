const express = require("express");
const socket = require("socket.io");
const http = require("http");
const cors = require("cors");

const app = express();
const port = 5000;
app.use(express.json());
app.use(cors());
const server = http.createServer(app);
const io = socket(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});
io.on("connection", (socket) => {
  socket.on("joinChat", () => {});
  socket.on("sendMessage", () => {});
  socket.on("disconnect", () => {});
});

app.use("/", (req, res) => {
  res.send("hello developer");
});

server.listen(port, () => {
  console.log("server started");
});
