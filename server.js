// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const path = require("path");
// const app = express();
// const { authSocket, socketServer } = require("./socketServer");
// const posts = require("./routes/posts");
// const users = require("./routes/users");
// const comments = require("./routes/comments");
// const messages = require("./routes/messages");
// const PostLike = require("./models/PostLike");
// const Post = require("./models/Post");

// dotenv.config();

// const httpServer = require("http").createServer(app);
// const io = require("socket.io")(httpServer, {
//   cors: {
//     origin: ["http://localhost:3000", "https://post-it-heroku.herokuapp.com"],
//   },
// });

// io.use(authSocket);
// io.on("connection", (socket) => socketServer(socket));

// mongoose.connect(
//   process.env.MONGO_URI,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   () => {
//     console.log("MongoDB connected");
//   }
// );

// httpServer.listen(process.env.PORT || 4000, () => {
//   console.log("Listening");
// });

// app.use(express.json());
// app.use(cors());
// app.use("/api/posts", posts);
// app.use("/api/users", users);
// app.use("/api/comments", comments);
// app.use("/api/messages", messages);

// if (process.env.NODE_ENV == "production") {
//   app.use(express.static(path.join(__dirname, "/client/build")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "client/build", "index.html"));
//   });
// }

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const http = require("http");
const { authSocket, socketServer } = require("./socketServer");

// Routes
const posts = require("./routes/posts");
const users = require("./routes/users");
const comments = require("./routes/comments");
const messages = require("./routes/messages");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:3000";

// Create HTTP server and WebSocket server
const httpServer = http.createServer(app);
const io = require("socket.io")(httpServer, {
  cors: { origin: [CLIENT_URL] },
});

// Middleware
app.use(express.json());
app.use(cors({ origin: CLIENT_URL, credentials: true }));

// WebSocket Authentication & Connection Handling
io.use(authSocket);
io.on("connection", (socket) => {
  console.log(`✅ New WebSocket connection: ${socket.id}`);
  socketServer(socket);
});

// MongoDB Connection with Error Handling
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1); // Exit process if DB connection fails
  });

// Routes
app.use("/api/posts", posts);
app.use("/api/users", users);
app.use("/api/comments", comments);
app.use("/api/messages", messages);

// Serve frontend in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => res.sendFile(path.join(__dirname, "client/build", "index.html")));
}

// Start server
httpServer.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// Graceful shutdown handling (for production)
process.on("SIGINT", () => {
  console.log("❌ Server shutting down...");
  mongoose.connection.close(() => {
    console.log("✅ MongoDB disconnected");
    process.exit(0);
  });
});

