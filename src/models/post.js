const mongoose = require("mongoose");

const options = { timestamp: true };

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },

    content: { type: String, required: true },

    likes: { type: Number, default: 0 },

    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],

    views: { type: Number, default: 0 },
  },
  options
);

export default mongoose.model("Post", postSchema);
