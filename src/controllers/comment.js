function createComment(req, res) {
  res.send("post comment");
}

function readComment(req, res) {
  res.send("get comment");
}

module.exports = { createComment, readComment };
