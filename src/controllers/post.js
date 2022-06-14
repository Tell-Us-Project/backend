function createPost(req, res) {
  res.send("post post");
}

function readPost(req, res) {
  res.send("get post");
}

module.exports = { createPost, readPost };
