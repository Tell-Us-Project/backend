const express = require("express");
const router = express.Router();

const commentController = require("../controllers/comment");

router.route("/all").get(function () {});

router
  .route("/:post_id/:comment_id")
  .get(commentController.readComment)
  .post(commentController.createComment);

module.exports = router;
