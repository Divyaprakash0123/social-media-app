const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
  createPost,
  getPosts,
  likePost,
  commentPost,
} = require("../controllers/taskController");

// Create Post
router.post("/", authMiddleware, createPost);

// Get All Posts
router.get("/", getPosts);

// Like Post
router.put("/like/:id", authMiddleware, likePost);

// Comment Post
router.post("/comment/:id", authMiddleware, commentPost);

module.exports = router;
