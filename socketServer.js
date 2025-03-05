// const jwt = require("jsonwebtoken");
// let users = [];

// const authSocket = (socket, next) => {
//   let token = socket.handshake.auth.token;

//   if (token) {
//     try {
//       const decoded = jwt.verify(token, process.env.TOKEN_KEY);
//       socket.decoded = decoded;
//       next();
//     } catch (err) {
//       next(new Error("Authentication error"));
//     }
//   } else {
//     next(new Error("Authentication error"));
//   }
// };

// const socketServer = (socket) => {
//   const userId = socket.decoded.userId;
//   users.push({ userId, socketId: socket.id });

//   socket.on("send-message", (recipientUserId, username, content) => {
//     const recipient = users.find((user) => user.userId == recipientUserId);
//     if (recipient) {
//       socket
//         .to(recipient.socketId)
//         .emit("receive-message", userId, username, content);
//     }
//   });

//   socket.on("disconnect", () => {
//     users = users.filter((user) => user.userId != userId);
//   });
// };

// module.exports = { socketServer, authSocket };
const jwt = require("jsonwebtoken");

let users = []; // Store connected users

const authSocket = (socket, next) => {
  try {
    let token = socket.handshake.auth?.token; // Ensure token exists

    if (!token) {
      return next(new Error("Authentication error: Token missing"));
    }

    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    socket.decoded = decoded;
    next();
  } catch (err) {
    return next(new Error("Authentication error: Invalid token"));
  }
};

const socketServer = (socket) => {
  const userId = socket.decoded.userId;

  // Remove existing entry before adding to prevent duplicates
  users = users.filter((user) => user.userId !== userId);
  users.push({ userId, socketId: socket.id });

  console.log(`✅ User ${userId} connected | Socket ID: ${socket.id}`);

  // Handle sending messages
  socket.on("send-message", ({ recipientUserId, username, content }) => {
    const recipient = users.find((user) => user.userId === recipientUserId);
    if (recipient) {
      console.log(`📨 Message sent from ${userId} to ${recipientUserId}`);
      socket.to(recipient.socketId).emit("receive-message", { userId, username, content });
    } else {
      console.log(`❌ Recipient ${recipientUserId} not found`);
    }
  });

  // Handle user disconnection
  socket.on("disconnect", () => {
    console.log(`❌ User ${userId} disconnected`);
    users = users.filter((user) => user.userId !== userId);
  });
};

module.exports = { socketServer, authSocket };

