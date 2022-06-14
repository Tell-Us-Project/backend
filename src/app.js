// imports
const express = require("express");

// consts
const app = express();
const PORT = 3000 || process.env.PORT;

// routes
const commentRoute = require("./routes/comment");
const postRoute = require("./routes/post");

// load middlewares
app.use(express.json());

// load routes
app.use("/api/v1/", commentRoute);
app.use("/api/v1/", postRoute);

app.listen(PORT, () => console.log("Server is running on port 3000"));
