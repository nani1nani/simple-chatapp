const express = require("express");
const socket = require("socket.io");
const http = require("http");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

const server = http.createServer(app);
const io = socket(server, {
  cors: {
    origin: "https://chaichatbro.netlify.app",
  },
});
io.on("connection", (socket) => {
  console.log("connection set", socket.id);
  socket.on("joinChat", ({ username, userId, receiverId }) => {
    const room = [userId, receiverId].sort().join("*");
    socket.join(room);
  });
  socket.on(
    "sendMessage",
    ({ username, message, userId, receiverId, Date }) => {
      const room = [userId, receiverId].sort().join("*");
      io.to(room).emit("servermsg", {
        username,
        message,
        userId,
        receiverId,
        Date,
      });
    }
  );
  socket.on("disconnect", () => {});
});

app.use("/", (req, res) => {
  res.send("hello developer");
});

server.listen(port, () => {
  console.log("server started");
});
