const mongoose = require("mongoose");

const options = { timestamp: true };

const commentSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },

    likes: { type: Number, default: 0 },
  },
  options
);

export default mongoose.model("Comment", commentSchema);
